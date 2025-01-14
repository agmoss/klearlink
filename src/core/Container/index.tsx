// src/core/Container.tsx

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <section className={className}>
      <div className={'container'}>{children}</div>
    </section>
  );
};

export default Container;
