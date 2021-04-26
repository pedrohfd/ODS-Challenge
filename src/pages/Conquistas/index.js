import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import Header from '../../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, Item, ItemText, CoinArea, CoinText} from './styles';

const Conquistas = () => {
  const [data] = useState([
    {id: '16', tipo: 'Paz, Justiça e Instituições Eficazes', valor: '175'},
  ]);

  return (
    <Container>
      <Header />
      <ScrollView>
        <Item>
          <ItemText>Erradicação da Probreza</ItemText>
          <CoinArea>
            <CoinText>100</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Fome zero e Agricultura</ItemText>
          <CoinArea>
            <CoinText>200</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Saúde e Bem-Estar</ItemText>
          <CoinArea>
            <CoinText>50</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Educação de Qualidade</ItemText>
          <CoinArea>
            <CoinText>150</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Igualdade de Gênero</ItemText>
          <CoinArea>
            <CoinText>75</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Água Potável e Saneamento</ItemText>
          <CoinArea>
            <CoinText>100</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Energia Acessível e Limpa</ItemText>
          <CoinArea>
            <CoinText>100</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Trabalho Decente e Crescimento</ItemText>
          <CoinArea>
            <CoinText>300</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Indústria, Inovação e Infraestrutura</ItemText>
          <CoinArea>
            <CoinText>100</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Redução da Desigualdades</ItemText>
          <CoinArea>
            <CoinText>250</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Cidades e Comunidades Sustentáveis</ItemText>
          <CoinArea>
            <CoinText>300</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Consumo e Produção Responsáveis</ItemText>
          <CoinArea>
            <CoinText>150</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Ação Contra a Mudança Global</ItemText>
          <CoinArea>
            <CoinText>50</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Vida na Água</ItemText>
          <CoinArea>
            <CoinText>75</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Vida Terrestre</ItemText>
          <CoinArea>
            <CoinText>50</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Paz, Justiça e Instituições Eficazes</ItemText>
          <CoinArea>
            <CoinText>175</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
        <Item>
          <ItemText>Parcerias e Meios de Implementação</ItemText>
          <CoinArea>
            <CoinText>275</CoinText>
            <Icon name="currency-usd-circle" size={20} color="#F4CC0C" />
          </CoinArea>
        </Item>
      </ScrollView>
    </Container>
  );
};

export default Conquistas;
