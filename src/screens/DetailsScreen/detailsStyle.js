import {StyleSheet} from 'react-native';
import colors from '../../common/colors';

const detailStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 18,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    color: colors.black,
    fontWeight: '700',
    lineHeight: 21,
  },
  location: {
    fontSize: 14,
    color: colors.gray,
    lineHeight: 16,
  },
});

export default detailStyle;
