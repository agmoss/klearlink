// src/components/DifferenceSection.tsx

import React from 'react';
import config, { BasicItem } from '../../../clearlinc.config';

const Feature: React.FC<BasicItem> = ({ title, description }) => (
  <div className="col col--12">
    <div className="blank-card">
      <div className="card__header">
        <h3 className="section__subtitle__alt">{title}</h3>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const DifferenceSection: React.FC = () => (
  <div id="difference">
    <div className="row row-alt">
      <div className="col col--12 text--center">
        <h2 className="section__title h2">{config.differenceSection.title}</h2>
      </div>
      <div className="row row-alt">
        <div className="col col--8">
          {config.differenceSection.items.map((feature, idx) => {
            return <Feature {...feature} key={idx} />;
          })}
        </div>
      </div>
    </div>
  </div>
);

export default DifferenceSection;
