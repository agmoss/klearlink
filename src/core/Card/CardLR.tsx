import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { CardBody, CardHeader } from '@site/src/core/Card';
import { IconType } from 'react-icons';

interface CardLRProps {
  Icon: IconType;
  title: string;
  description: string;
}

export const CardLeft: React.FC<CardLRProps> = ({
  title,
  description,
  Icon,
}) => (
  <div className={clsx('card', 'margin-vert--lg', 'padding--md', 'shadow--md')}>
    <div className={clsx('row')}>
      <div className={clsx('col', 'col--8')}>
        <CardHeader>
          <h3 className="text--bold text--secondary">{title}</h3>
        </CardHeader>
        <CardBody>
          <p className="section__description">{description}</p>
        </CardBody>
      </div>
      <div className={clsx('col', 'col--4', styles.imageContainer)}>
        <Icon size={100} />
      </div>
    </div>
  </div>
);

export const CardRight: React.FC<CardLRProps> = ({
  title,
  description,
  Icon,
}) => (
  <div className={clsx('card', 'margin-vert--lg', 'padding--md', 'shadow--md')}>
    <div className={clsx('row')}>
      <div className={clsx('col', 'col--4', styles.imageContainer)}>
        <Icon size={100} />
      </div>
      <div className={clsx('col', 'col--8')}>
        <CardHeader>
          <h3 className="text--bold text--secondary">{title}</h3>
        </CardHeader>
        <CardBody>
          <p className="section__description">{description}</p>
        </CardBody>
      </div>
    </div>
  </div>
);

export default CardLeft;
