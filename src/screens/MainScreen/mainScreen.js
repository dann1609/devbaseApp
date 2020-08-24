import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function MainScreen(props) {
  const {navigation} = props;

  const onPress = () => {
    navigation.navigate('details', {
      user: {},
    });
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Top 5 GitHub Users</Text>
        <Text>Tap username to see more information</Text>
        <UserButton onPress={onPress} />
      </View>
    </SafeAreaView>
  );
}

function UserButton(props) {
  const {onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>User</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MainScreen;