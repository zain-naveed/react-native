import {COLORS} from '@theme/colors';
import {GST} from '@theme/global_styles';
import {RF} from '@theme/responsive';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  Header: {
    flex: 0.4,
    backgroundColor: COLORS.PRIMARY,
    display: 'flex',
    alignItems: 'center',
  },
  Content: {
    paddingLeft: RF(20),
    paddingRight: RF(20),
  },
});
export default styles;
