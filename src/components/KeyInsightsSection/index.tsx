// src/components/KeyInsightsSection.tsx

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './styles.module.css';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';
import config, { Title } from '@site/klearlink.config';

const Insight: React.FC<Title> = ({ title }) => (
  <li className={styles.insightItem}>
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
            <ul className="list--unstyled center list__ul">
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
