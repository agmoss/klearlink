import classNames from 'classnames';
import * as React from 'react';

interface ContainerProps {
  background?: 'dark' | 'highlight' | 'light';
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: Array<'all' | 'bottom' | 'left' | 'right' | 'top'>;
  wrapper?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  background,
  children,
  className,
  padding = [],
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
    <section className={containerClasses}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Container;
