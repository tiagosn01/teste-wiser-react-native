import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(RectButton)`
  max-width: 170px;
  width: 100%;
  height: 48px;
  margin-top: 25px;
  margin-bottom: -45px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled(LinearGradient).attrs({
  colors: ['#383E71', '#9D25B0'],
  start: { y: 0.0, x: 1.0 },
  end: { y: 0.0, x: 0.0 },
})`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #fff;
  font-size: 18px;
`;
