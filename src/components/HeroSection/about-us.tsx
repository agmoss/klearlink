// src/components/HeroSection/about-us.tsx

import React from 'react';
import styles from './styles.module.css';
import config from '@site/klearlink.config';

const HeroSection = () => (
  <header className="hero hero--primary">
    <div className="container">
      <div className={styles.heroContent}>
        <h1 className="hero__title text--bold text--secondary">
          {config.aboutUsSection.hero.title}
        </h1>
        <p className="hero__subtitle">{config.aboutUsSection.hero.subTitle}</p>
      </div>
    </div>
  </header>
);

export default HeroSection;
