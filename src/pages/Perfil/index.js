import React, {useContext} from 'react';
import {Avatar} from 'react-native-paper';

import Header from '../../components/header';

import {AuthContext} from '../../contexts/auth';

import {
  Container,
  AvatarArea,
  TextArea,
  Name,
  RA,
  ButtonArea,
  RewardButton,
  RewardButtonText,
  LogoutButton,
  LogoutButtonText,
} from './styles';

const Perfil = () => {
  const {signOut, user} = useContext(AuthContext);

  return (
    <Container>
      <Header />
      <AvatarArea>
        <Avatar.Image
          size={160}
          source={require('../../assets/image/Mascara_Sabito.jpg')}
          style={{
            borderWidth: 82,
            borderColor: '#6200ee',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </AvatarArea>

      <TextArea>
        <Name>{user && user.nome}</Name>
        <RA>190418</RA>
      </TextArea>

      <ButtonArea>
        {/* <RewardButton>
          <RewardButtonText>Prêmios</RewardButtonText>
        </RewardButton> */}

        <LogoutButton onPress={() => signOut()}>
          <LogoutButtonText>Logout</LogoutButtonText>
        </LogoutButton>
      </ButtonArea>
    </Container>
  );
};

export default Perfil;
