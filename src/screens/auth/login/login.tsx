
import CustomText from '@components/custom_text/customText';
import Input from '@components/input/input';
import SubmitBtn from '@components/submit_btn/submitBtn';
import AuthWrapper from '@components/auth_wrapper/AuthWrapper';
import {setUser} from '@redux/reducers/userReducer';
import {GST} from '@theme/global_styles';
import {LoginSchema} from '@utils/validations';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import styles from './styles';

const initialValues = {
  email: '',
  password: '',
};

const Login = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = ({email, password}: any, {setSubmitting}: any) => {
    setTimeout(() => {
      setSubmitting(false);
      dispatch(setUser({email}));
    }, 3000);
    // const params = {
    //   email,
    //   password,
    // };
    // loginUser(params)
    //   .then((res: any) => {
    //     setSubmitting(false);
    //     dispatch(setUser(res.data.user));
    //     dispatch(setAuthToken(res.data.token));
    //   })
    //   .catch((err: any) => {
    //     setSubmitting(false);
    //     showToast('Request Failed', err?.response.data?.message, false);
    //   });
  };

  return (
    <AuthWrapper>
    
    </AuthWrapper>
  );
};

export default Login;
