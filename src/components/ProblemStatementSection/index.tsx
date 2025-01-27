import React from 'react';
import config, { Title } from '@site/klearlink.config';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';
import CreditRadarChart from '@site/src/core/Chart';
import { FaArrowRight } from 'react-icons/fa';

const Insight: React.FC<Title> = ({ title }) => (
  <li>
    <FaArrowRight className="icon__small" />
    {title}
  </li>
);

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
          <CardBody>
            <ul className="list--unstyled list__ul">
              {config.problemStatementSection.items.map((insight, idx) => (
                <div key={idx} className="padding--md">
                  <Insight {...insight} />
                </div>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
      <div className="col col--6">
        <Card className="dont__render__small">
          <CreditRadarChart />
        </Card>
      </div>
    </div>
  </div>
);

export default ProblemStatementSection;
