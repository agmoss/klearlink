// src/components/DifferenceSection.tsx

import React from 'react';
import config, { BasicItem } from '../../../clearlinc.config';
import Card, { CardHeader } from '@site/src/core/Card';

const DifferenceCard: React.FC<BasicItem> = ({ title, description }) => (
  <Card blank={true}>
    <CardHeader>
      <h3 className="section__subtitle alt">{title}</h3>
    </CardHeader>
    <div className="card__body">
      <p>{description}</p>
    </div>
  </Card>
);

const DifferenceSection: React.FC = () => (
  <div id="difference">
    <div className="row alt">
      <div className="col col--12 text--center">
        <h2 className="section__title h2">{config.differenceSection.title}</h2>
      </div>
      <div className="row alt">
        <div className="col col--8">
          {config.differenceSection.items.map((feature, idx) => (
            <div key={idx} className="col col--12">
              <DifferenceCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DifferenceSection;
