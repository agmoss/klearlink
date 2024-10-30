// src/components/HeroSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Image from '../../core/Image';
import styles from './styles.module.css';

const FeatureList: Image = {
  Svg: require('@site/static/img/img.svg').default,
};

const HeroSection = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className="hero__title">{siteConfig.tagline}</h1>
          <p className="hero__subtitle">
            Real-time profiling and alternative credit insights, so you lend
            with confidence.
          </p>
          <div className={styles.buttonGroup}>
            <Link
              className="button button--primary button--lg mainButton"
              to={useBaseUrl('/contact-us')}
            >
              Contact Us
            </Link>
            <Link
              className="button button--primary button--lg mainButton"
              to={useBaseUrl('/docs')}
            >
              How It Works
            </Link>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <FeatureList.Svg className={styles.logoBackground} role="img" />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
