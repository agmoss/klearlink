import React from 'react';
import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
};

type CardComponentProps = Pick<CardProps, 'children' | 'className' | 'id'>;

const Card: React.FC<CardProps> = ({ children, className, id, alt }) => {
  const containerClasses = clsx('card', className, {
    alt,
  });

  return (
    <div className={containerClasses} id={id}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardComponentProps> = ({
  children,
  className,
  id,
}) => {
  const containerClasses = clsx('card__header', className);

  return (
    <div className={containerClasses} id={id}>
      {children}
    </div>
  );
};

export const CardBody: React.FC<CardComponentProps> = ({
  children,
  className,
  id,
}) => {
  const containerClasses = clsx('card__body', className);

  return (
    <div className={containerClasses} id={id}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardComponentProps> = ({
  children,
  className,
  id,
}) => {
  const containerClasses = clsx('card__footer', className);

  return (
    <div className={containerClasses} id={id}>
      {children}
    </div>
  );
};

export default Card;
