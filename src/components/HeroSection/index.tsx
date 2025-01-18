// src/components/HeroSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import config from '../../../klearlink.config';

const HeroSection = () => (
  <header className="hero hero--primary">
    <div className="container">
      <div className={styles.heroContent}>
        <h1 className="hero__title">{config.heroSection.title}</h1>
        <p className="hero__subtitle">{config.heroSection.subTitle}</p>
        <div className={styles.buttonGroup}>
          <Link
            className="button button--primary button--lg main"
            to={useBaseUrl('/contact-us')}
          >
            Contact Us
          </Link>
          <Link
            className="button button--primary button--lg main"
            to={useBaseUrl('/#solutions')}
          >
            How It Works
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default HeroSection;
