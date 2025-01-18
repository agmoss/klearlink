// src/components/DifferenceSection.tsx

import React from 'react';
import config from '../../../klearlink.config';

import CardLR from '@site/src/core/Card/CardLR';

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
            <div key={idx} className="col col--12 padding--md">
              {isEven(idx) ? (
                <CardLR {...feature} side="left" />
              ) : (
                <CardLR {...feature} side="right" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DifferenceSection;
