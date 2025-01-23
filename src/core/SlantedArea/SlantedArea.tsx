// src/core/SlantedArea.tsx
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type SlantedAreaProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title: string;
  wrapper?: boolean;
};

const SlantedArea: React.FC<SlantedAreaProps> = ({
  children,
  className,
  title,
}) => {
  return (
    <div className={clsx(styles.slantedContainer, className, 'section')}>
      <div className={styles.slantedContent}>
        <div className="row">
          <div className="col col--12 text--center">
            <h2 className="section__title">{title}</h2>
          </div>
        </div>
        <div className={styles.mainSlantedContent}>{children}</div>
      </div>
    </div>
  );
};

export default SlantedArea;
