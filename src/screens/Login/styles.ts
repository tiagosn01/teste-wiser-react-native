import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Button from '../../components/Button';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled(LinearGradient).attrs({
  colors: ['transparent', '#130525'],
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 70px;
`;

export const Form = styled.View`
  align-items: center;
  justify-content: center;
  padding: 24px;
  max-height: 390px;
  max-width: 350px;
  width: 100%;
  height: 100%;
  background: #faf5ff;
  border-radius: 8px;
`;
export const Title = styled.Text`
  color: #383e71;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 5px;
`;
export const SecondTitle = styled.Text`
  align-self: flex-start;
  color: #989fdb;
  font-size: 12px;
  padding: 10px;
`;

export const Label = styled.Text`
  padding: 10px;
  align-self: flex-start;
  color: #383e71;
  font-size: 10px;
`;

export const ViewForgotPassword = styled.View`
  position: absolute;
  bottom: 30px;
`;
export const ForgotPasswordText = styled.Text`
  font-size: 14px;
  color: #fff;
`;
