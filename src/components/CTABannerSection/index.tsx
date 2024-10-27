// src/components/CTABannerSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const CTABannerSection: React.FC = () => (
  <div className={styles.ctaBanner}>
    <div className="row">
      <div className="col col--12 text--center">
        <h2 className="section__title">
          Curious to Enhance Your Credit Profiling? We’d Love to Hear from You.
        </h2>
        <Link
          className="button button--primary button--lg mainButton"
          to={useBaseUrl('contact-us')}
        >
          Get More Info
        </Link>
      </div>
    </div>
  </div>
);

export default CTABannerSection;
