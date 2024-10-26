// src/components/KeyInsightsSection.tsx

import React from 'react';
import clsx from 'clsx';
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

const Insight = ({ text }: InsightItem) => {
  return (
    <li className={clsx('section__list-item', styles.insightItem)}>{text}</li>
  );
};

const KeyInsightsSection: React.FC = () => (
  <section className={clsx('section', styles.keyInsights)}>
    <div className="container">
      <div className="row">
        <div className="col col--12 text--center">
          <h2 className="section__title">Key Insights Provided by Clearlinc</h2>
          <p className={styles.subtitle}>
            Discover essential insights for smarter lending and better
            decisions.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col col--12">
          <ul className={clsx('list--unstyled', styles.insightsList)}>
            {FeatureList.map((insight, idx) => (
              <Insight key={idx} {...insight} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default KeyInsightsSection;
