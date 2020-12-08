import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Botao, TextoBotao} from './styles';

const Button = ({page}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Botao style={{elevation: 3}} onPress={() => navigation.navigate(page)}>
        <TextoBotao style={{fontFamily: 'IBMPlexSans-Regular'}}>
          Ir para Desafio
        </TextoBotao>
      </Botao>
    </Container>
  );
};

export default Button;
