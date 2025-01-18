// src/components/OutlineSection.tsx

import React from 'react';

import config, { IconItem } from '@site/klearlink.config';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';

const OutlineCard: React.FC<IconItem> = ({ title, description, Icon }) => (
  <Card alt>
    <CardHeader>
      <div className="text--center">
        <Icon className="icon" />
      </div>
    </CardHeader>
    <CardBody>
      <h3 className="section__subtitle">{title}</h3>
      <p className="section__description">{description}</p>
    </CardBody>
  </Card>
);

const OutlineSection: React.FC = () => (
  <div id="outline">
    <div className="row">
      <div className="col col--12 text--center">
        <h2 className="section__title">{config.outlineSection.title}</h2>
      </div>
    </div>
    <div className="row">
      <div className="col col--8 col--offset-2">
        <div className="row">
          {config.outlineSection.items.map((feature, idx) => (
            <div key={idx} className="col col--6 padding--md">
              <OutlineCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default OutlineSection;
