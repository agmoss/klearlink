// src/core/Container.tsx

import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: Array<'all' | 'bottom' | 'left' | 'right' | 'top'>;
  wrapper?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <section className={clsx(className, 'section')}>
      <div className={classNames('container', styles.cntr)}>{children}</div>
    </section>
  );
};

export default Container;
