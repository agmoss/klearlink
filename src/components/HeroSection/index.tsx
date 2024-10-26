// src/components/HeroSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

const HeroSection = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroSection)}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.content}>
          <h1 className={clsx('hero__title', styles.title)}>
            {siteConfig.tagline}
          </h1>
          <p className={clsx('hero__subtitle', styles.subtitle)}>
            Real-time profiling and alternative credit insights, so you lend
            with confidence.
          </p>
          <div className={styles.buttonGroup}>
            <Link
              className="button button--primary button--lg"
              to={useBaseUrl('/contact-us')}
            >
              Contact Us
            </Link>
            <Link
              className="button button--secondary button--lg"
              to={useBaseUrl('/docs')}
            >
              How It Works
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/500x300" // Placeholder image
            alt="Financial Data Visualization"
            className={styles.placeholderImage}
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
