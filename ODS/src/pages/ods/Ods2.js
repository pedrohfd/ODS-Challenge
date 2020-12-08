import React from 'react';
import {TouchableOpacity} from 'react-native';

import Back from '../../assets/icons/backButtonSemibold.svg';
import Button from '../../components/button';

import {Container, Toolbox, Text, ODS} from './styles';

const Ods2 = ({navigation}) => {
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
      <ODS source={require('../../assets/image/ODS2.png')} />
      <Text>
        Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição
        e promover a agricultura sustentável.
      </Text>
      <Button page={'Ch2'} />
    </Container>
  );
};

export default Ods2;
