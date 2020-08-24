import React from 'react';
import {View} from 'react-native';

function DetailsScreen(props) {
  const {route} = props;
  const {user} = route.params;

  return <View />;
}

export default DetailsScreen;
