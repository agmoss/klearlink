// src/components/HowItWorksSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import config, { BasicItem } from '../../../clearlinc.config';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';

const Feature: React.FC<BasicItem & { idx: number }> = ({
  title,
  description,
  idx,
}) => (
  <div className="col col--12">
    <Card alt={true}>
      <CardHeader>
        <div className="icon">{idx + 1}</div>
      </CardHeader>
      <CardBody>
        <h3 className="section__subtitle alt">{title}</h3>
        <p>{description}</p>
      </CardBody>
    </Card>
  </div>
);

const HowItWorksSection: React.FC = () => (
  <div id="how-it-works">
    <Card>
      <div className="row alt">
        <div className="col col--12 text--center">
          <h2 className="section__title h2">
            {config.howItWorksSection.title}
          </h2>
        </div>
        <div className="row alt">
          <div className="col col--8">
            {config.howItWorksSection.items.map((feature, idx) => {
              return <Feature {...feature} idx={idx} key={idx} />;
            })}
          </div>
          <div className="col col--12 text--center">
            <Link
              className="button button--primary button--lg main"
              to={useBaseUrl('/docs')}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default HowItWorksSection;
