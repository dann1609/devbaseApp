import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import userButtonStyle from './userButtonStyle';

function UserButton(props) {
  const {onPress, user} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={userButtonStyle.container}>
        <Text style={userButtonStyle.text}>{user.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default UserButton;
