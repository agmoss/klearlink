import React from 'react';
import config, { Title } from '../../../clearlinc.config';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';
import CreditRadarChart from '@site/src/core/Chart';
import clsx from 'clsx';
import { FaArrowRight } from 'react-icons/fa';

const Insight: React.FC<Title> = ({ title }) => (
  <li className="section__list-item insightItem">
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
          <CardBody className="section__content">
            <ul className={clsx('list--unstyled insightsList')}>
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
        <Card className="dont-render-small">
          <CreditRadarChart />
        </Card>
      </div>
    </div>
  </div>
);

export default ProblemStatementSection;
