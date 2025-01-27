import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link, { Props } from '@docusaurus/Link';

type ButtonProps = {
  type: 'primary' | 'secondary';
} & Props;

const Button: React.FC<ButtonProps> = ({ ...ButtonProps }) => {
  const buttonClasses = clsx(
    'button',
    ButtonProps.className,
    { [styles.buttonPrimary]: ButtonProps.type === 'primary' },
    { [styles.buttonSecondary]: ButtonProps.type === 'secondary' },
  );

  return (
    <Link {...ButtonProps} className={buttonClasses}>
      {ButtonProps.children}
    </Link>
  );
};

type SubmitButtonProps = {
  type: 'primary' | 'secondary';
} & Omit<React.ComponentProps<'button'>, 'type'>;

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  type,
  className,
  children,
  ...rest
}) => {
  const buttonClasses = clsx(
    'button',
    className,
    { [styles.buttonPrimary]: type === 'primary' },
    { [styles.buttonSecondary]: type === 'secondary' },
  );

  return (
    <button type="submit" {...rest} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
