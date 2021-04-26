import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ImageArea = styled.View`
  margin-top: 160px;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 90px;
  width: 330px;
`;

export const LogoText = styled.Text`
  font-size: 36px;
  font-weight: 500;
  line-height: 42px;
`;

export const AreaButton = styled.View`
  margin-top: 240px;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  width: 318;
  background-color: #6200ee;
  margin-left: 48px;
  margin-right: 48px;
  margin-bottom: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 400;
`;
