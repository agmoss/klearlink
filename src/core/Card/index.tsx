import classNames from 'classnames';
import React from 'react';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: boolean;
  alt?: boolean;
  blank?: boolean;
}

type CardComponentProps = Pick<CardProps, 'children' | 'className' | 'id'>;

const Card: React.FC<CardProps> = ({
  children,
  className,
  id,
  padding,
  alt,
  blank,
}) => {
  const containerClasses = clsx('card', className, {
    padding,
    alt,
    blank,
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
  const containerClasses = classNames('card__header', className);

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
  const containerClasses = classNames('card__body', className);

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
  const containerClasses = classNames('card__footer', className);

  return (
    <div className={containerClasses} id={id}>
      {children}
    </div>
  );
};

export default Card;
