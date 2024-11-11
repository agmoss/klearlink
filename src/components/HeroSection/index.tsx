// src/components/HeroSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import config from '../../../clearlinc.config';

const HeroSection = () => (
  <header className={clsx('hero hero--primary')}>
    <div className="container">
      <div className={styles.heroContent}>
        <h1 className="hero__title">{config.hero.title}</h1>
        <p className="hero__subtitle">{config.hero.subTitle}</p>
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
    </div>
  </header>
);

export default HeroSection;
