import * as React from 'react';
import * as styles from './Button.scss';

interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: IButtonProps) => (
  <div className={styles.button} onClick={onClick}>
    {children}
  </div>
);

export default Button;
