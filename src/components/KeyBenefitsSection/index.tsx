import React from 'react';

import Card, { CardBody, CardHeader } from '@site/src/core/Card';
import config, { IconItem } from '@site/klearlink.config';

const BenefitCard: React.FC<IconItem> = ({ title, description, Icon }) => (
  <Card>
    <CardHeader>
      <div className="text--center">
        <Icon className="icon" />
      </div>
    </CardHeader>
    <CardBody>
      <div className="padding-horiz--md">
        <h3 className="section__subtitle">{title}</h3>
        <p>{description}</p>
      </div>
    </CardBody>
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
        <div key={idx} className="col col--4 padding--md">
          <BenefitCard {...feature} />
        </div>
      ))}
    </div>
  </div>
);

export default KeyBenefitsSection;
