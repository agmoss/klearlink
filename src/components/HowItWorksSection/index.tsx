// src/components/HowItWorksSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import config, { BasicItem } from '../../../clearlinc.config';

const Feature: React.FC<BasicItem & { idx: number }> = ({
  title,
  description,
  idx,
}) => (
  <div className="col col--12">
    <div className="card-alt">
      <div className="card__header">
        <div className="icon">{idx + 1}</div>
      </div>
      <div className="card__body">
        <h3 className="section__subtitle__alt">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const HowItWorksSection: React.FC = () => (
  <div id="how-it-works">
    <div className="card">
      <div className="row row-alt">
        <div className="col col--12 text--center">
          <h2 className="section__title h2">
            {config.howItWorksSection.title}
          </h2>
        </div>
        <div className="row row-alt">
          <div className="col col--8">
            {config.howItWorksSection.items.map((feature, idx) => {
              return <Feature {...feature} idx={idx} key={idx} />;
            })}
          </div>
          <div className="col col--12 text--center">
            <Link
              className="button button--primary button--lg mainButton"
              to={useBaseUrl('/docs')}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorksSection;
