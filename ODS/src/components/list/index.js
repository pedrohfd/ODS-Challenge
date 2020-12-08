import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, Data, CoinArea} from './styles';

const List = ({data}) => {
  const [complete, setComplete] = useState();

  return (
    <Container>
      <Data>{data.tipo}</Data>
      <CoinArea>
        <Data>{data.valor}</Data>
        <Icon name="currency-usd-circle" size={18} style={{color: '#F4CC0C'}} />
      </CoinArea>
    </Container>
  );
};

export default List;
