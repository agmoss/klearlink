// src/components/HowItWorksSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

const HowItWorksSection: React.FC = () => (
  <section id="how-it-works" className={clsx('section', styles.howItWorks)}>
    <div className="container">
      <div className="row">
        <div className="col col--12 text--center">
          <h2 className="section__title">How It Works</h2>
          <ol className={clsx('list--unstyled', styles.steps)}>
            <li className={clsx(styles.stepItem)}>
              <h3 className="section__subtitle">Connect & Collect</h3>
              <p className="section__description">
                Your institution links masked, securely connected data sources
                to Clearlinc with minimal setup.
              </p>
            </li>
            <li className={clsx(styles.stepItem)}>
              <h3 className="section__subtitle">Instant Profiling</h3>
              <p className="section__description">
                Receive an applicant match and collect real-time credit profile
                data on your applicant.
              </p>
            </li>
            <li className={clsx(styles.stepItem)}>
              <h3 className="section__subtitle">Informed Decision-Making</h3>
              <p className="section__description">
                Use the data to inform your decision tree, increasing your
                ability to make accurate credit decisions for each applicant.
              </p>
            </li>
          </ol>
          <Link
            className="button button--primary button--lg"
            to="mailto:info@clearlinc.io"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
