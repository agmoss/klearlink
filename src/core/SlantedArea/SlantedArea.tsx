// SlantedArea.tsx
import React from 'react';
import clsx from 'clsx';
import classNames from 'classnames';
import styles from './styles.module.css';

interface SlantedAreaProps {
  background?: 'dark' | 'highlight' | 'light';
  children: React.ReactNode;
  className?: string;
  id?: string;
  title: string;
  padding?: Array<'all' | 'bottom' | 'left' | 'right' | 'top'>;
  wrapper?: boolean;
}

const SlantedArea: React.FC<SlantedAreaProps> = ({
  background,
  children,
  className,
  padding = [],
  title,
}) => {
  const containerClasses = classNames('section', className, {
    darkBackground: background === 'dark',
    highlightBackground: background === 'highlight',
    lightBackground: background === 'light',
    paddingAll: padding.includes('all'),
    paddingBottom: padding.includes('bottom'),
    paddingLeft: padding.includes('left'),
    paddingRight: padding.includes('right'),
    paddingTop: padding.includes('top'),
  });

  return (
    <div className={clsx(styles.slantedContainer, containerClasses)}>
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
