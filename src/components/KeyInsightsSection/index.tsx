// src/components/KeyInsightsSection.tsx

import React from 'react';
import clsx from 'clsx';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './styles.module.css';
import config, { Title } from '../../../clearlinc.config';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';

const Insight: React.FC<Title> = ({ title }) => (
  <li className={clsx('section__list-item', styles.insightItem)}>
    <FaCheckCircle className="icon__small" />
    {title}
  </li>
);

const KeyInsightsSection: React.FC = () => (
  <div id="key-insights">
    <div className="row">
      <div className="col col--7 text--center">
        <Card>
          <CardHeader>
            <h2 className="section__title">
              {config.keyInsightsSection.title}
            </h2>
            <h3 className="section__subtitle">
              {config.keyInsightsSection.subTitle}
            </h3>
          </CardHeader>
          <CardBody>
            <ul className={clsx('list--unstyled', styles.insightsList)}>
              {config.keyInsightsSection.items.map((insight, idx) => (
                <Insight key={idx} {...insight} />
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
);

export default KeyInsightsSection;
