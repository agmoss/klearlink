// src/core/CTABanner.tsx

import React from 'react';

import styles from './styles.module.css';

interface CTABannerProps {
  title: string;
  title2: string;
  link: React.ReactNode;
}

const CTABanner: React.FC<CTABannerProps> = ({ title, title2, link }) => (
  <div className={styles.ctaBanner}>
    <div className="row">
      <div className="col col--12 text--center">
        <h4 className="section__title alt">{title}</h4>
        <h4 className="section__title alt">{title2}</h4>
        {link}
      </div>
    </div>
  </div>
);

export default CTABanner;
