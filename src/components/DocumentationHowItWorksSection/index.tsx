import React from 'react';
import config, { BasicItem } from '@site/klearlink.config';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';
import clsx from 'clsx';

const Insight: React.FC<BasicItem> = ({ title, description }) => (
  <li className="section__list-item insightItem">
    <p className="text--bold text--secondary inline">{title}</p>
    <p className="inline">{description}</p>
  </li>
);

const DocumentationHowItWorksSection: React.FC = () => (
  <div id="documentation-section">
    <div className="row">
      <div className="col col-12">
        <Card>
          <CardHeader>
            <h2 className="section__title">How It Works</h2>
          </CardHeader>
          <CardBody className="section__content">
            <ul className={clsx('list--unstyled insightsList')}>
              {config.docsSection.howItWorks.map((insight, idx) => (
                <div key={idx} className="padding--sm">
                  <Insight {...insight} />
                </div>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
);

export default DocumentationHowItWorksSection;
