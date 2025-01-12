// src/core/Container.tsx

import classNames from 'classnames';
import React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: Array<'all' | 'bottom' | 'left' | 'right' | 'top'>;
  wrapper?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  padding,
}) => {
  const containerClasses = classNames('container', className, {
    paddingAll: padding.indexOf('all') >= 0,
    paddingBottom: padding.indexOf('bottom') >= 0,
    paddingLeft: padding.indexOf('left') >= 0,
    paddingRight: padding.indexOf('right') >= 0,
    paddingTop: padding.indexOf('top') >= 0,
  });

  return (
    <section className={clsx(className, 'section')}>
      <div className={classNames(containerClasses)}>{children}</div>
    </section>
  );
};

export default Container;
