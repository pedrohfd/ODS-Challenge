import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {Container, Text, CameraView} from '../styles';

import firebase from '../../../services/firebaseConnection';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useNavigation} from '@react-navigation/native';

const Ch1 = () => {
  const navigation = useNavigation();
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

  const ifScaned = (e) => {
    firebase
      .database()
      .ref('coin')
      .child('valor')
      .set(coin + 100)
      .then(alert('Desafio Concluido'))
      .catch((err) => Alert.alert('Qr Code Invalido', e.data));

    navigation.navigate('Home');
  };

  return (
    <Container>
      <Text>
        Realize uma doação de alimentos não pereciveis na Biblioteca.
        {'\n'}
        {'\n'}
        Prazo: 27/11 a 03/12
        {'\n'}
        {'\n'}
        Instituição: CASA DAS MÃES E DAS CRIANÇAS DE SOROCABA
        {'\n'}
        {'\n'}
        Quantidade: 1Kg ou mais
      </Text>
      <CameraView>
        <QRCodeScanner
          onRead={ifScaned}
          showMarker={true}
          markerStyle={{borderColor: '#fff', borderRadius: 20}}
          reactivate={true}
          reactivateTimeout={5000}
          cameraStyle={{
            height: 100,
            width: 350,
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        />
      </CameraView>
    </Container>
  );
};

export default Ch1;
