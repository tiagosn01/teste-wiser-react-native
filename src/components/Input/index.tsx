import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputText } from './styles';

function Input({ ...rest }: TextInputProps): JSX.Element {
  return (
    <Container>
      <InputText {...rest} placeholderTextColor="#989FDB" />
    </Container>
  );
}

export default Input;
