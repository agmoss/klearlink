import React from 'react';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';

const DocumentationReadySection: React.FC = () => (
  <div id="documentation-ready">
    <div className="row">
      <div className="col col-12">
        <Card>
          <CardHeader>
            <h2 className="section__title">Ready to Get Started?</h2>
          </CardHeader>
          <CardBody className="section__content">
            <p>
              Click below to request your API documentation and someone will get
              in touch shortly.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
);

export default DocumentationReadySection;
