// src/components/UseCasesSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

const UseCasesSection: React.FC = () => (
  <section className={clsx('section', styles.useCases)}>
    <div className="container">
      <div className="row">
        <div className="col col--12 text--center">
          <h2 className="section__title">Use Cases</h2>
        </div>
      </div>
      <div className="row">
        <div className={clsx('col col--3', styles.caseItem)}>
          <h3 className="section__subtitle">Positive Payment Compliance</h3>
          <p className="section__description">
            See when applicants maintain strong payment records with other
            lenders or are in a non-compliant state.
          </p>
        </div>
        <div className={clsx('col col--3', styles.caseItem)}>
          <h3 className="section__subtitle">Bank Account Visibility</h3>
          <p className="section__description">
            Gain insight into additional bank accounts the applicant has
            utilized in the last 60 days, allowing you to prompt for more
            accurate transactional data.
          </p>
        </div>
        <div className={clsx('col col--3', styles.caseItem)}>
          <h3 className="section__subtitle">Debt-to-Income Accuracy</h3>
          <p className="section__description">
            Decline high-risk applicants with reliable DTI figures based on
            real-time data.
          </p>
        </div>
        <div className={clsx('col col--3', styles.caseItem)}>
          <h3 className="section__subtitle">Matched Monitoring</h3>
          <p className="section__description">
            Stay informed when applicants have new loan obligations elsewhere or
            are compliant/non-compliant on those obligations.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col col--12 text--center">
          <Link className="button button--primary button--lg" to="/use-cases">
            Discover More Use Cases
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default UseCasesSection;
