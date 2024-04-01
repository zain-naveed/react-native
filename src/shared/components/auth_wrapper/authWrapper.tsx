import {COLORS} from '@theme/colors';
import {GST} from '@theme/global_styles';
import React, {ReactChild} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const {GRADIENT_A, GRADIENT_B, GRADIENT_C, GRADIENT_D} = COLORS;

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
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <View
        style={[
          styles.container,
          {
            paddingTop,
            paddingBottom,
          },
        ]}>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AuthWrapper;
