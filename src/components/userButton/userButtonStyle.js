import {StyleSheet} from 'react-native';
import colors from '../../common/colors';

const userButtonStyle = StyleSheet.create({
  container: {
    width: 88,
    height: 34,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    margin: 5,
  },
  text: {
    color: colors.white,
  },
});

export default userButtonStyle;
