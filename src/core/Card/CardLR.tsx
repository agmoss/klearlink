import React from 'react';
import clsx from 'clsx';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';
import { IconType } from 'react-icons';

type CardLRProps = {
  Icon: IconType;
  title: string;
  description: string;
  side: 'left' | 'right';
};

export const CardLR: React.FC<CardLRProps> = ({
  title,
  description,
  Icon,
  side,
}) => (
  <Card className={clsx('margin-vert--lg', 'padding--md', 'shadow--md')}>
    <div className={clsx('row')}>
      {side === 'left' && (
        <div className={clsx('col', 'col--4', 'center', 'dont-render-small')}>
          <Icon size={100} />
        </div>
      )}
      <div className={clsx('col', 'col--8')}>
        <CardHeader>
          <h3 className="text--bold text--secondary">{title}</h3>
        </CardHeader>
        <CardBody>
          <p className="section__description">{description}</p>
        </CardBody>
      </div>
      {side === 'right' && (
        <div className={clsx('col', 'col--4', 'center', 'dont-render-small')}>
          <Icon size={100} />
        </div>
      )}
    </div>
  </Card>
);

export default CardLR;
