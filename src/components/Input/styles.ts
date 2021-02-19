import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #faf5ff;
  border-radius: 8px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #989fdb;
  flex-direction: row;
  align-items: center;
  /*
  Colocando foco laranja na borda
 */
`;

export const InputText = styled(TextInput)`
  flex: 1;
  color: #383e71;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;
