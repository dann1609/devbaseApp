import React from 'react';
import {View, Image, Text} from 'react-native';

import detailStyle from './detailsStyle';

function DetailsScreen(props) {
  const {route} = props;
  const {user} = route.params;

  console.log(user);

  return (
    <View style={detailStyle.container}>
      <Image style={detailStyle.image} source={{uri: user.avatar_url}} />
      <View style={detailStyle.textContainer}>
        <Text style={detailStyle.name}>{user.name}</Text>
        <Text style={detailStyle.location}>{user.location}</Text>
      </View>
    </View>
  );
}

export default DetailsScreen;
