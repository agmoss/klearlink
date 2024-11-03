// src/components/KeyInsightsSection.tsx

import React from 'react';
import clsx from 'clsx';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './styles.module.css';

type InsightItem = {
  text: string;
};

const FeatureList: InsightItem[] = [
  { text: 'Application Date & Time' },
  { text: 'Origination Date & Time' },
  { text: 'Credit Amount' },
  { text: 'Payment Compliance & Non-Compliance' },
  { text: 'Linked Institutions' },
  { text: 'Customer Indicators' },
];

const Insight: React.FC<InsightItem> = ({ text }) => {
  return (
    <li className={clsx('section__list-item', styles.insightItem)}>
      <FaCheckCircle className={styles.icon} />
      {text}
    </li>
  );
};

const KeyInsightsSection: React.FC = () => (
  <div className="row">
    <div className="col col--7 text--center">
      <div className="card">
        <div className="card__header">
          <h2 className="section__title">Key Insights Provided by Clearlinc</h2>
          <h3 className="section__subtitle">
            Discover essential data and insights for smarter decisioning.
          </h3>
        </div>
        <div className="card__body">
          <ul className={clsx('list--unstyled', styles.insightsList)}>
            {FeatureList.map((insight, idx) => (
              <Insight key={idx} {...insight} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default KeyInsightsSection;
