import React from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';

import Header from '../../components/header';

import {Container, Body, BottomBody, ODS} from './styles';

const Home = ({navigation}) => {
  return (
    <Container>
      <Header />
      <ScrollView>
        <Body>
          <TouchableOpacity onPress={() => navigation.navigate('Ods1')}>
            <ODS source={require('../../assets/icons/ODS1.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ods2')}>
            <ODS source={require('../../assets/icons/ODS2.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ods3')}>
            <ODS source={require('../../assets/icons/ODS3.png')} />
          </TouchableOpacity>
        </Body>
        <Body>
          <TouchableOpacity onPress={() => navigation.navigate('Ods4')}>
            <ODS source={require('../../assets/icons/ODS4.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ods5')}>
            <ODS source={require('../../assets/icons/ODS5.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ods6')}>
            <ODS source={require('../../assets/icons/ODS6.png')} />
          </TouchableOpacity>
        </Body>
        <Body>
          <TouchableOpacity onPress={() => navigation.navigate('Ods7')}>
            <ODS source={require('../../assets/icons/ODS7.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ods8')}>
            <ODS source={require('../../assets/icons/ODS8.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ods9')}>
            <ODS source={require('../../assets/icons/ODS9.png')} />
          </TouchableOpacity>
        </Body>
        <Body>
          <TouchableOpacity onPress={() => navigation.navigate('Ods10')}>
            <ODS source={require('../../assets/icons/ODS10.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ods11')}>
            <ODS source={require('../../assets/icons/ODS11.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ods12')}>
            <ODS source={require('../../assets/icons/ODS12.png')} />
          </TouchableOpacity>
        </Body>
        <Body>
          <TouchableOpacity onPress={() => navigation.navigate('Ods13')}>
            <ODS source={require('../../assets/icons/ODS13.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ods14')}>
            <ODS source={require('../../assets/icons/ODS14.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ods15')}>
            <ODS source={require('../../assets/icons/ODS15.png')} />
          </TouchableOpacity>
        </Body>
        <BottomBody>
          <TouchableOpacity onPress={() => navigation.navigate('Ods16')}>
            <ODS source={require('../../assets/icons/ODS16.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ods17')}>
            <ODS source={require('../../assets/icons/ODS17.png')} />
          </TouchableOpacity>
        </BottomBody>
      </ScrollView>
    </Container>
  );
};

export default Home;
