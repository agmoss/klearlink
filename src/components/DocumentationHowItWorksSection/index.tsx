import React from 'react';
import config, { BasicItem } from '@site/klearlink.config';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';

const Insight: React.FC<BasicItem> = ({ title, description }) => (
  <li>
    <p className="text--bold text--secondary inline">{title}</p>
    <p className="inline">{description}</p>
  </li>
);

const DocumentationHowItWorksSection: React.FC = () => (
  <div id="documentation-section">
    <div className="row">
      <div className="col col--8 col--offset-2">
        <Card>
          <CardHeader>
            <h2 className="section__title">
              {config.docsSection.howItWorks.title.title}
            </h2>
          </CardHeader>
          <CardBody>
            <ul className="list--unstyled list__ul">
              {config.docsSection.howItWorks.items.map((insight, idx) => (
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
