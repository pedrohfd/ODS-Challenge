import React, {useState, useContext} from 'react';
import {
  Platform,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Background,
  Container,
  IconArea,
  ImageArea,
  Logo,
  LogoText,
  Title,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from './styles';

const SignIn = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn, loadingAuth} = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
          <IconArea onPress={() => navigation.navigate('Start')}>
            <Icon
              name="arrow-circle-left"
              size={36}
              style={{color: '#6200ee'}}
            />
          </IconArea>
          <ImageArea>
            <Logo source={require('../../assets/image/facens.png')} />
            <LogoText>ODS CHALLENGE</LogoText>
          </ImageArea>
          <Title>ACESSAR</Title>
          <AreaInput>
            <Input
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              underlineColor="#fff0"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </AreaInput>
          <AreaInput>
            <Input
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              underlineColor="#fff0"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </AreaInput>

          <SubmitButton onPress={handleLogin}>
            {loadingAuth ? (
              <ActivityIndicator size={20} color="#fff" />
            ) : (
              <SubmitText>Login</SubmitText>
            )}
          </SubmitButton>
        </Container>
      </TouchableWithoutFeedback>
    </Background>
  );
};

export default SignIn;
