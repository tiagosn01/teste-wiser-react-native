import React from 'react';

import { ButtonProps } from 'react-native';

import { Container, ButtonText, Content } from './styles';

interface IButtonChildren extends ButtonProps {
  children: string;
}

function Button({ children, ...rest }: IButtonChildren): JSX.Element {
  return (
    <Container>
      <Content>
        <ButtonText {...rest}>{children}</ButtonText>
      </Content>
    </Container>
  );
}

export default Button;
