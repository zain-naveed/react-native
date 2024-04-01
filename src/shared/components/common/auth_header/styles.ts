import {COLORS} from '@theme/colors';
import {GST} from '@theme/global_styles';
import {RF} from '@theme/responsive';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  AuthHeader: {
    width: RF(210),
    display: 'flex',
    alignItems: 'center',
  },
  Img: {
    width: RF(158),
    height: RF(149),
    marginTop: RF(30),
    marginBottom: RF(15),
  },
  Heading: {
    textAlign: 'center',
  },
});
export default styles;
