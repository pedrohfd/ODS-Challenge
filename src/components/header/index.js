/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';

import Facens from '../../assets/image/facensWhite.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../../services/firebaseConnection';

import {Container, HeaderArea, CoinView, Text} from './styles';

const Header = () => {
  const [coin, setCoin] = useState(0);

  useEffect(() => {
    const loadCoin = async () => {
      await firebase
        .database()
        .ref('coin')
        .child('valor')
        .on('value', (snapshot) => {
          setCoin(snapshot.val());
        });
    };

    loadCoin();
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor="#6200EE" />
      <HeaderArea
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,
          elevation: 20,
        }}>
        <Facens width={100} height={50} style={{marginLeft: 16}} />
        <CoinView>
          <Text>{coin}</Text>
          <Icon
            name="currency-usd-circle"
            size={20}
            style={{color: '#F4CC0C', marginRight: 16}}
          />
        </CoinView>
      </HeaderArea>
    </Container>
  );
};

export default Header;
