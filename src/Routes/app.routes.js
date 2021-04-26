import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/Home';
import Conquistas from '../pages/Conquistas';
import Perfil from '../pages/Perfil';

import Ods1 from '../pages/ods/Ods1';
import Ods2 from '../pages/ods/Ods2';
import Ods3 from '../pages/ods/Ods3';
import Ods4 from '../pages/ods/Ods4';
import Ods5 from '../pages/ods/Ods5';
import Ods6 from '../pages/ods/Ods6';
import Ods7 from '../pages/ods/Ods7';
import Ods8 from '../pages/ods/Ods8';
import Ods9 from '../pages/ods/Ods9';
import Ods10 from '../pages/ods/Ods10';
import Ods11 from '../pages/ods/Ods11';
import Ods12 from '../pages/ods/Ods12';
import Ods13 from '../pages/ods/Ods13';
import Ods14 from '../pages/ods/Ods14';
import Ods15 from '../pages/ods/Ods15';
import Ods16 from '../pages/ods/Ods16';
import Ods17 from '../pages/ods/Ods17';

import Ch1 from '../pages/Challenge/Ch1';
import Ch2 from '../pages/Challenge/Ch2';
// import Ch3 from '../pages/Challenge/Ch3';
// import Ch4 from '../pages/Challenge/Ch4';
// import Ch5 from '../pages/Challenge/Ch5';
// import Ch6 from '../pages/Challenge/Ch6';
// import Ch7 from '../pages/Challenge/Ch7';
// import Ch8 from '../pages/Challenge/Ch8';
// import Ch9 from '../pages/Challenge/Ch9';
// import Ch10 from '../pages/Challenge/Ch10';
// import Ch11 from '../pages/Challenge/Ch11';
// import Ch12 from '../pages/Challenge/Ch12';
// import Ch13 from '../pages/Challenge/Ch13';
// import Ch14 from '../pages/Challenge/Ch14';
// import Ch15 from '../pages/Challenge/Ch15';
// import Ch16 from '../pages/Challenge/Ch16';
// import Ch17 from '../pages/Challenge/Ch17';

const HomeStack = createStackNavigator();

const HomeScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods1"
        component={Ods1}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods2"
        component={Ods2}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods3"
        component={Ods3}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods4"
        component={Ods4}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods5"
        component={Ods5}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods6"
        component={Ods6}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods7"
        component={Ods7}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods8"
        component={Ods8}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods9"
        component={Ods9}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods10"
        component={Ods10}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods11"
        component={Ods11}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods12"
        component={Ods12}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods13"
        component={Ods13}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods14"
        component={Ods14}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods15"
        component={Ods15}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods16"
        component={Ods16}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ods17"
        component={Ods17}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ch1"
        component={Ch1}
        options={{
          headerTintColor: '#fff',
          headerTitle: false,
          headerStyle: {
            backgroundColor: '#6200EE',
          },
        }}
      />
      <HomeStack.Screen name="Ch2" component={Ch2} />
      {/* <HomeStack.Screen name="Ch3" component={Ch3} />
      <HomeStack.Screen name="Ch4" component={Ch4} />
      <HomeStack.Screen name="Ch5" component={Ch5} />
      <HomeStack.Screen name="Ch6" component={Ch6} />
      <HomeStack.Screen name="Ch7" component={Ch7} />
      <HomeStack.Screen name="Ch8" component={Ch8} />
      <HomeStack.Screen name="Ch9" component={Ch9} />
      <HomeStack.Screen name="Ch10" component={Ch10} />
      <HomeStack.Screen name="Ch11" component={Ch11} />
      <HomeStack.Screen name="Ch12" component={Ch12} />
      <HomeStack.Screen name="Ch13" component={Ch13} />
      <HomeStack.Screen name="Ch14" component={Ch14} />
      <HomeStack.Screen name="Ch15" component={Ch15} />
      <HomeStack.Screen name="Ch16" component={Ch16} />
      <HomeStack.Screen name="Ch17" component={Ch17} /> */}
    </HomeStack.Navigator>
  );
};

const TrophyStack = createStackNavigator();

const TrophyScreen = () => {
  return (
    <TrophyStack.Navigator headerMode="none">
      <TrophyStack.Screen name="Conquistas" component={Conquistas} />
    </TrophyStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();

const ProfileScreen = () => {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Perfil" component={Perfil} />
    </ProfileStack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react-native/no-inline-styles
      barStyle={{backgroundColor: '#6200EE', height: 56}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-variant' : 'home-variant-outline';
          } else if (route.name === 'Conquistas') {
            iconName = focused ? 'trophy-variant' : 'trophy-variant-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'account' : 'account-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={24} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Conquistas" component={TrophyScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppRoutes;
