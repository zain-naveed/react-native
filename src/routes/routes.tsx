import React from 'react';
import {useSelector} from 'react-redux';
import MainStack from '@routes/stacks/main_stack/mainStack';
import AuthStack from '@routes/stacks/auth_stack/authStack';

const Routes = () => {
  const {user} = useSelector((state: any) => state.root.user);

  return <>{user ? <AuthStack /> : <MainStack />}</>;
};

export default Routes;
