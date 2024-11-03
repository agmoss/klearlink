// src/components/CTABannerSection.tsx

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
        <h2 className="section__title">{title}</h2>
        <h2 className="section__title">{title2}</h2>
        {link}
      </div>
    </div>
  </div>
);

export default CTABanner;
