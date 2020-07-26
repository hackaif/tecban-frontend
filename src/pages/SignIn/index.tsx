import React, { useCallback, useRef } from 'react';
import {
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  View,
  Alert,
} from 'react-native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { signInRequest } from '../../store/ducks/auth/actions';
// import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, ImageLogo } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const formRef = useRef<FormHandles>(null);

  const passwordInputRef = useRef<TextInput>(null);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email Obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(signInRequest(data.email, data.password));
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais',
        );
      }
    },
    [dispatch],
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} enabled>
      <Container>
        <ImageLogo source={logo} />

        <View>
          <Title>Faça seu login</Title>
        </View>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            icon="mail"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordInputRef.current?.focus()}
          />

          <Input
            ref={passwordInputRef}
            secureTextEntry
            name="password"
            icon="lock"
            placeholder="Senha"
            returnKeyType="send"
            onSubmitEditing={() => formRef.current?.submitForm()}
          />

          <View>
            <Button onPress={() => formRef.current?.submitForm()}>
              Entrar
            </Button>
          </View>
        </Form>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
