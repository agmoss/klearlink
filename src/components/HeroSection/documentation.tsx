// src/components/HeroSection/documentation.tsx

import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import config from '@site/klearlink.config';

const HeroSection = () => (
  <header className="hero hero--primary">
    <div className="container">
      <div className={styles.heroContent}>
        <h1 className="hero__title text--bold text--secondary">
          {config.docsSection.hero.title}
        </h1>
        <p className="hero__subtitle">{config.docsSection.hero.subTitle}</p>
        <div className={styles.buttonGroup}>
          <Link
            className="button button--primary button--lg main"
            to={useBaseUrl('/documentation/#docsform')}
          >
            Request Documentation
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default HeroSection;
