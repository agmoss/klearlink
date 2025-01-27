import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={className}>
      <Container>{children}</Container>
    </section>
  );
};

export const Container: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <div className={clsx('container', styles.container, className)}>
      {children}
    </div>
  );
};
