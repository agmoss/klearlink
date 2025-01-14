// src/components/HeroSection/documentation.tsx

import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const HeroSection = () => (
  <header className="hero hero--primary">
    <div className="container">
      <div className={styles.heroContent}>
        <h1 className="hero__title text--bold text--secondary">
          Seamless. Real-time. Alternative Credit Data. One Simple API.
        </h1>
        <p className="hero__subtitle">
          Dive into the Clearlinc developer-first API—engineered for speed,
          scalability, and seamless integration—so you can launch in days, not
          months.
        </p>
        <div className={styles.buttonGroup}>
          <Link className="button button--primary button--lg main">
            Request Documentation
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default HeroSection;
