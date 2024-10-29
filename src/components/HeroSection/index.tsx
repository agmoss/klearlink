// src/components/HeroSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Image from '../../core/Image';

const FeatureList: Image = {
  Svg: require('@site/static/img/img.svg').default,
};

const HeroSection = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary homeContainer')}>
      <div className={clsx('container')}>
        <div className={'heroContent'}>
          <h1 className={clsx('hero__title')}>{siteConfig.tagline}</h1>
          <p className={clsx('hero__subtitle')}>
            Real-time profiling and alternative credit insights, so you lend
            with confidence.
          </p>
          <div className={'buttonGroup'}>
            <Link
              className="button button--primary button--lg mainButton"
              to={useBaseUrl('/contact-us')}
            >
              Contact Us
            </Link>
            <Link
              className="button button--primary button--lg secondaryButton"
              to={useBaseUrl('/docs')}
            >
              How It Works
            </Link>
          </div>
        </div>
        <div className={'heroImageContainer'}>
          <FeatureList.Svg className={'logoBackground'} role="img" />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
