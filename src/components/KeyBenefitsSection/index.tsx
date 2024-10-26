// src/components/KeyBenefitsSection.tsx

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const KeyBenefitsSection: React.FC = () => (
  <section className={clsx('section-alt', styles.keyBenefits)}>
    <div className="container">
      <div className="row">
        <div className="col col--12 text--center">
          <h2 className="section__title">The Benefits Are Clear</h2>
        </div>
      </div>
      <div className="row">
        <div className={clsx('col col--3', styles.benefitItem)}>
          <h3 className="section__subtitle">Institution Awareness</h3>
          <p className="section__description">
            Know what institutions your applicant has linked within the last 60
            days.
          </p>
        </div>
        <div className={clsx('col col--3', styles.benefitItem)}>
          <h3 className="section__subtitle">Fraud Prevention</h3>
          <p className="section__description">
            Prevent fraud by understanding the applicant's recent credit
            behavior.
          </p>
        </div>
        <div className={clsx('col col--3', styles.benefitItem)}>
          <h3 className="section__subtitle">Debt-to-Income Precision</h3>
          <p className="section__description">
            Get an accurate debt-to-income ratio using real-time data.
          </p>
        </div>
        <div className={clsx('col col--3', styles.benefitItem)}>
          <h3 className="section__subtitle">Performance Monitoring</h3>
          <p className="section__description">
            Track your borrower’s credit profile over time to enhance lifetime
            value and minimize risk.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default KeyBenefitsSection;
