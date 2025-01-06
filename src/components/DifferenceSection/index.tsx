// src/components/DifferenceSection.tsx

import React from 'react';
import config from '../../../clearlinc.config';

import CardLeft, { CardRight } from '@site/src/core/Card/CardLR';

const isEven = (num: number): boolean => num % 2 === 0;

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
              {isEven(idx) ? (
                <CardLeft {...feature} />
              ) : (
                <CardRight {...feature} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DifferenceSection;
