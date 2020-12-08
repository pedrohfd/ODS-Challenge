import React from 'react';
import {TouchableOpacity} from 'react-native';

import Back from '../../assets/icons/backButtonSemibold.svg';
import Button from '../../components/button';

import {Container, Toolbox, Text, ODS} from './styles';

const Ods16 = ({navigation}) => {
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
      <ODS source={require('../../assets/image/ODS16.png')} />
      <Text>
        Promover sociedades pacíficas e inclusivas para o desenvolvimento
        sustentável, proporcionar o acesso à justiça para todos e construir
        instituições eficazes, responsáveis e inclusivas em todos os níveis.
      </Text>
      <Button />
    </Container>
  );
};

export default Ods16;
