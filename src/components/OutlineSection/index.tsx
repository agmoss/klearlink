// src/components/OutlineSection.tsx

import React from 'react';

import config, { IconItem } from '../../../clearlinc.config';

const Benefit: React.FC<IconItem> = ({ title, description, Icon }) => (
  <div className="col col--4">
    <div className="card largerCardPadding">
      <div className="text--center">
        <Icon className="icon" />
      </div>
      <div className="padding-horiz--md">
        <h3 className="section__subtitle">{title}</h3>
        <p className="section__description">{description}</p>
      </div>
    </div>
  </div>
);

const OutlineSection: React.FC = () => (
  <div id="outline">
    <div className="row">
      {config.outlineSection.items.map((feature, idx) => (
        <Benefit key={idx} {...feature} />
      ))}
    </div>
  </div>
);

export default OutlineSection;
