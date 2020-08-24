import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';

import MainScreen from '../../screens/MainScreen/mainScreen';
import color from '../../common/colors';
import DetailsScreen from '../../screens/DetailsScreen/detailsScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.black,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="home"
        component={MainScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="details"
        component={DetailsScreen}
        options={{title: 'Home'}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
