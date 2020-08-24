import {StyleSheet} from 'react-native';
import colors from '../../common/colors';

const mainStyle = StyleSheet.create({
  title: {
    fontSize: 24,
    lineHeight: 28,
    color: colors.black,
    fontWeight: '700',
    marginTop: 30,
    marginHorizontal: 20,
  },
  details: {
    fontSize: 16,
    lineHeight: 19,
    color: colors.black,
    marginTop: 10,
    marginHorizontal: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    paddingTop: 18,
  },
});

export default mainStyle;
