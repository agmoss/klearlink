import React from 'react';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';
import config from '@site/klearlink.config';

const DocumentationReadySection: React.FC = () => (
  <div id="documentation-ready">
    <div className="row">
      <div className="col col-12">
        <Card>
          <CardHeader>
            <h2 className="section__title">{config.docsSection.ready.title}</h2>
          </CardHeader>
          <CardBody className="section__content">
            <p>{config.docsSection.ready.subTitle}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
);

export default DocumentationReadySection;
