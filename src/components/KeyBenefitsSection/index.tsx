// src/components/KeyBenefitsSection.tsx

import React from 'react';

import config, { IconItem } from '../../../clearlinc.config';
import Card from '@site/src/core/Card';

const BenefitCard: React.FC<IconItem> = ({ title, description, Icon }) => (
  <Card blank={true}>
    <div className="text--center">
      <Icon className="icon" />
    </div>
    <div className="padding-horiz--md">
      <h3 className="section__subtitle">{title}</h3>
      <p className="section__description">{description}</p>
    </div>
  </Card>
);

const KeyBenefitsSection: React.FC = () => (
  <div id="key-benefits">
    <div className="row">
      <div className="col col--12 text--center">
        <h2 className="section__title">{config.keyBenefitsSection.title}</h2>
      </div>
    </div>
    <div className="row">
      {config.keyBenefitsSection.items.map((feature, idx) => (
        <div key={idx} className="col col--4">
          <BenefitCard {...feature} />
        </div>
      ))}
    </div>
  </div>
);

export default KeyBenefitsSection;
