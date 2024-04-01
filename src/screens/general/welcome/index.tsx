import CustomLoading from '@components/custom_loading/customLoading';
import CustomText from '@components/custom_text/customText';
import SubmitBtn from '@components/submit_btn/submitBtn';
import Wrapper from '@components/wrapper/wrapper';
import {setUser} from '@redux/reducers/userReducer';
import {GST} from '@theme/global_styles';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './styles';

const Welcome = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const pressHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(setUser(null));
    }, 2000);
  };

  return (
    <Wrapper>
      <View style={styles.mainContainer}>
        <CustomLoading visible={loading} />
        <CustomText bold size={40} style={styles.heading}>
          Welcome
        </CustomText>
        <CustomText size={16} style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </CustomText>
        <SubmitBtn
          title={'Logout'}
          onPress={pressHandler}
          containerStyle={GST.mt10}
        />
      </View>
    </Wrapper>
  );
};

export default Welcome;
