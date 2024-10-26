// src/components/CTABannerSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

const CTABannerSection: React.FC = () => (
  <section className={clsx('section', styles.ctaBanner)}>
    <div className="container">
      <div className="row">
        <div className="col col--12 text--center">
          <h2 className="section__title">
            Curious to Enhance Your Credit Profiling? We’d Love to Hear from
            You.
          </h2>
          <Link
            className="button button--primary button--lg"
            to="mailto:info@clearlinc.io"
          >
            Get More Info
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTABannerSection;
