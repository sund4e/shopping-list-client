import * as React from 'react';
import LoginPage from '../LoginPage/LoginPage';
import * as styles from './App.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <LoginPage />
    </div>
  );
};

export default App;
