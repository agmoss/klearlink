// src/components/OutlineSection.tsx

import React from 'react';

import config, { IconItem } from '../../../clearlinc.config';
import Card from '@site/src/core/Card';

const OutlineCard: React.FC<IconItem> = ({ title, description, Icon }) => (
  <Card padding={true}>
    <div className="text--center">
      <Icon className="icon" />
    </div>
    <div className="padding-horiz--md">
      <h3 className="section__subtitle">{title}</h3>
      <p className="section__description">{description}</p>
    </div>
  </Card>
);

const OutlineSection: React.FC = () => (
  <div id="outline">
    <div className="row">
      {config.outlineSection.items.map((feature, idx) => (
        <div key={idx} className="col col--4">
          <OutlineCard {...feature} />
        </div>
      ))}
    </div>
  </div>
);

export default OutlineSection;
