import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const IconArea = styled.TouchableOpacity`
  width: 100%;
  margin-top: -90px;
  margin-left: 30px;
  margin-bottom: 100px;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: 36px;
  margin-bottom: 60px;
  color: #6200ee;
`;

export const ImageArea = styled.View`
  align-items: center;
  margin-bottom: 90px;
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

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: 346px;
  height: 60px;
  padding-left: 12px;
  font-size: 17px;
  background-color: #f4f4f4;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-width: 1.5px;
  border-bottom-color: #6200ee;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #6200ee;
  width: 318px;
  height: 60px;
  border-radius: 15px;
  margin-top: 36px;
`;

export const SubmitText = styled.Text`
  font-size: 24px;
  color: #fff;
`;
