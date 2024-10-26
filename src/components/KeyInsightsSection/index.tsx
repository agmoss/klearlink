// src/components/KeyInsightsSection.tsx

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const KeyInsightsSection: React.FC = () => (
  <section className={clsx('section', styles.keyInsights)}>
    <div className="container">
      <div className="row">
        <div className="col col--12 text--center">
          <h2 className="section__title">Key Insights Provided by Clearlinc</h2>
        </div>
      </div>
      <div className="row">
        <div className="col col--12">
          <ul className={clsx('list--unstyled', styles.insightsList)}>
            <li className="section__list-item">Application Date & Time</li>
            <li className="section__list-item">Origination Date & Time</li>
            <li className="section__list-item">Credit Amount</li>
            <li className="section__list-item">
              Payment Compliance & Non-Compliance
            </li>
            <li className="section__list-item">Linked Institutions</li>
            <li className="section__list-item">Customer Indicators</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default KeyInsightsSection;
