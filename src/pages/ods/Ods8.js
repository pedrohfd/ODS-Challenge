import React from 'react';
import {TouchableOpacity} from 'react-native';

import Back from '../../assets/icons/backButtonSemibold.svg';
import Button from '../../components/button';

import {Container, Toolbox, Text, ODS} from './styles';

const Ods8 = ({navigation}) => {
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
      <ODS source={require('../../assets/image/ODS8.png')} />
      <Text>
        Promover o crescimento econômico sustentado, inclusivo e sustentável, o
        emprego pleno e produtivo e o trabalho decente para todos.
      </Text>
      <Button />
    </Container>
  );
};

export default Ods8;
