import React from 'react';
import {TouchableOpacity} from 'react-native';

import Back from '../../assets/icons/backButtonSemibold.svg';
import Button from '../../components/button';

import {Container, Toolbox, Text, ODS} from './styles';

const Ods7 = ({navigation}) => {
  return (
    <Container>
      <Toolbox>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Back
            width={24}
            height={24}
            style={{marginTop: 20, marginLeft: 16}}
          />
        </TouchableOpacity>
      </Toolbox>
      <ODS source={require('../../assets/image/ODS7.png')} />
      <Text>
        Assegurar o acesso confiável, sustentável, moderno e a preço acessível à
        energia para todos.
      </Text>
      <Button />
    </Container>
  );
};

export default Ods7;
