// src/components/HeroSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

const HeroSection: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.hero)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1 className={clsx('hero__title', styles.heroTitle)}>
              {siteConfig.tagline}
            </h1>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
              Real-time profiling and alternative credit insights, so you lend
              with confidence.
            </p>
            <div className={clsx('button-group', styles.ctaButtons)}>
              <Link
                className="button button--primary button--lg"
                to="mailto:info@clearlinc.io"
              >
                Learn More Now
              </Link>
              <Link
                className="button button--secondary button--lg"
                to={useBaseUrl('#how-it-works')}
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
