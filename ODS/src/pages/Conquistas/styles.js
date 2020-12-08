import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Item = styled.View`
  margin: 10px;
  background-color: #6200ee;
  padding-left: 30px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  flex-direction: row;
  padding-right: 22px;
`;

export const ItemText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const CoinArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CoinText = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-right: 3px;
`;
