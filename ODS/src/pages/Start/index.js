import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  ImageArea,
  Logo,
  LogoText,
  AreaButton,
  Button,
  ButtonText,
} from './styles';

const Start = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ImageArea>
        <Logo source={require('../../assets/image/facens.png')} />
        <LogoText>ODS CHALLENGE</LogoText>
      </ImageArea>
      <AreaButton>
        <Button onPress={() => navigation.navigate('SignIn')}>
          <ButtonText>Login</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('SignUp')}>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </AreaButton>
    </Container>
  );
};

export default Start;
