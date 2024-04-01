import AuthHeader from '@components/common/auth_header/AuthHeader';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/global_styles';
import React, {ReactChild} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import styles from './styles';
import Input from '@components/input/input';
const {PRIMARY} = COLORS;

interface Props {
  children: ReactChild;
  noPaddingTop: any;
  noPaddingBottom: any;
}

const AuthWrapper = ({
  children,
  noPaddingTop,
  noPaddingBottom,
}: Partial<Props>) => {
  const insets = useSafeAreaInsets();
  const paddingTop = noPaddingTop ? 0 : insets.top;
  const paddingBottom = noPaddingBottom ? 0 : insets.bottom;
  return (
    <KeyboardAwareScrollView>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <View
        style={[
          styles.Header,
          {
            paddingTop,
            paddingBottom,
          },
        ]}>
        <AuthHeader />
      </View>
      <View style={styles.Content}>{children}</View>
    </KeyboardAwareScrollView>
  );
};

export default AuthWrapper;
