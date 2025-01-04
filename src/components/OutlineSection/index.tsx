// src/components/OutlineSection.tsx

import React from 'react';

import config, { IconItem } from '../../../clearlinc.config';

const Benefit: React.FC<IconItem> = ({ title, description, Icon }) => (
  <div className="col col--4">
    <div className="card blank-card">
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
      <div className="col col--12 text--center">
        <h2 className="section__title">{config.outlineSection.title}</h2>
      </div>
    </div>
    <div className="row">
      {config.outlineSection.items.map((feature, idx) => (
        <Benefit key={idx} {...feature} />
      ))}
    </div>
  </div>
);

export default OutlineSection;
