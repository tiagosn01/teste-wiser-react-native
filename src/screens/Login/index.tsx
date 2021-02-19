/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';

import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  Content,
  Form,
  Title,
  SecondTitle,
  Label,
  ForgotPasswordText,
  ViewForgotPassword,
} from './styles';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

const image = require('../../assets/bg-image.png');

interface SignInFormData {
  email: string;
  password: string;
}

// Styles ImageBackground
const stylesImage = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

function Login(): JSX.Element {
  const navigation = useNavigation();

  const { signIn } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido obrigatório'),
          password: Yup.string().required('Senha obrigatória.'),
        });

        await schema.validate(
          { email, password },
          {
            abortEarly: false,
          },
        );
        await api.post('users', { email: data.email, password: data.password });
        navigation.navigate('Home');
      } catch (err) {
        console.log(err);
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer o login,cheque as credenciais',
        );
      }
    },
    [email, navigation, password],
  );
  return (
    <Container source={image} style={stylesImage.backgroundImage}>
      <Content>
        <Form>
          <Title>
            Olá, seja
            {'\n'}
            bem-vindo!
          </Title>
          <SecondTitle>Para acessar a plataforma, faça seu login.</SecondTitle>
          <Label>E-MAIL</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="user.name@mail.com"
            returnKeyType="next"
            onChangeText={e => {
              setEmail(e);
            }}
          />

          <Label>SENHA</Label>
          <Input
            placeholder="*******"
            secureTextEntry
            returnKeyType="send"
            onChangeText={e => {
              setPassword(e);
            }}
          />

          <Button
            title="Submit"
            onPress={() => {
              handleSignIn({ email, password });
            }}
          >
            ENTRAR
          </Button>
        </Form>
        <ViewForgotPassword>
          <ForgotPasswordText>Esqueceu seu login ou senha?</ForgotPasswordText>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <ForgotPasswordText>Clique </ForgotPasswordText>

            <ForgotPasswordText
              onPress={() => navigation.navigate('ForgotPassword')}
              style={{ textDecorationLine: 'underline' }}
            >
              aqui
            </ForgotPasswordText>
          </View>
        </ViewForgotPassword>
      </Content>
    </Container>
  );
}

export default Login;
