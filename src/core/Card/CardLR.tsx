import React from 'react';
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
  <Card className="margin-vert--lg padding--md shadow--md">
    <div className="row">
      {side === 'left' && (
        <div className="col col--4 center dont__render__small">
          <Icon size={100} />
        </div>
      )}
      <div className="col col--8">
        <CardHeader>
          <h3 className="text--secondary">{title}</h3>
        </CardHeader>
        <CardBody>
          <p>{description}</p>
        </CardBody>
      </div>
      {side === 'right' && (
        <div className="col col--4 center dont__render__small">
          <Icon size={100} />
        </div>
      )}
    </div>
  </Card>
);

export default CardLR;
