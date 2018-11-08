import * as React from 'react';
import Button from '../Button/Button';

const LoginPage = () => {
  const signIn = () => {
    console.log('sign in!');
  };
  return <Button onClick={signIn}>Sing in with Google</Button>;
};

export default LoginPage;
