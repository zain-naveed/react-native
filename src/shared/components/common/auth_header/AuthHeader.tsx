import CustomText from '@components/custom_text/customText';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {projectIcon} from '@assets/icons';
export default function AuthHeader() {
  return (
    <View style={styles.AuthHeader}>
      <FastImage
        source={projectIcon}
        style={styles.Img}
        resizeMode={'contain'}
      />
      <CustomText size={14} style={styles.Heading}>
        “ The best features, we’re offering for the productivity ”
      </CustomText>
    </View>
  );
}
