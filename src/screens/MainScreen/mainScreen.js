import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

import mainStyles from './mainStyle';
import {getGithubUser} from '../../actions/github';
import UserButton from '../../components/userButton/userButton';

function MainScreen(props) {
  const {navigation} = props;

  const top5Users = [
    'GrahamCampbell',
    'fabpot',
    'weierophinney',
    'rkh',
    'josh',
  ];

  const getUsersButtons = () => {
    return top5Users.map((user, index) => {
      const userObject = {
        user: user,
        name: `User #${index + 1}`,
      };

      const goToDetail = () => {
        getGithubUser(user).then((response) => {
          if (response) {
            navigation.navigate('details', {
              user: response,
            });
          }
        });
      };

      return <UserButton user={userObject} onPress={goToDetail} />;
    });
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={mainStyles.title}>Top 5 GitHub Users</Text>
        <Text style={mainStyles.details}>
          Tap username to see more information
        </Text>
        <View style={mainStyles.buttonsContainer}>{getUsersButtons()}</View>
      </View>
    </SafeAreaView>
  );
}

export default MainScreen;
