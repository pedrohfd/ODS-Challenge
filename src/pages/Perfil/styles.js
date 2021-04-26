import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const AvatarArea = styled.View`
  align-items: center;
  margin-top: 70px;
`;

export const TextArea = styled.View`
  align-items: center;
  margin-top: 36px;
`;

export const Name = styled.Text`
  font-size: 24px;
`;

export const RA = styled.Text`
  font-size: 24px;
`;

export const ButtonArea = styled.View`
  align-items: center;
  margin-top: 140px;
`;

export const RewardButton = styled.TouchableOpacity`
  background-color: #6200ee;
  height: 44px;
  width: 300px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const RewardButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: #da5757;
  height: 44px;
  width: 300px;
  margin-top: 26px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const LogoutButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;
