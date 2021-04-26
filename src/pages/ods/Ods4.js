import React from 'react';
import {TouchableOpacity} from 'react-native';

import Back from '../../assets/icons/backButtonSemibold.svg';
import Button from '../../components/button';

import {Container, Toolbox, Text, ODS} from './styles';

const Ods4 = ({navigation}) => {
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
      <ODS source={require('../../assets/image/ODS4.png')} />
      <Text>
        Assegurar a educação inclusiva e equitativa de qualidade, e promover
        oportunidades de aprendizagem ao longo da vida para todos.
      </Text>
      <Button />
    </Container>
  );
};

export default Ods4;
