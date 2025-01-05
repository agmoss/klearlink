import React from 'react';
import config from '../../../clearlinc.config';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';

const ProblemStatementSection: React.FC = () => (
  <div id="problem-statement">
    <div className="row">
      <div className="col col--6">
        <Card>
          <CardHeader>
            <h2 className="section__title">
              {config.problemStatementSection.title}
            </h2>
            <h3 className="section__subtitle">
              {config.problemStatementSection.subTitle}
            </h3>
          </CardHeader>
          <CardBody className="section__content">
            <p>{config.problemStatementSection.problem}</p>
            <p>{config.problemStatementSection.solution}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
);

export default ProblemStatementSection;
