import React from 'react';
import styles from './styles.module.css';
import config from '@site/klearlink.config';
import { Container } from '@site/src/core/Container';

const HeroSection = () => (
  <header className="hero hero--primary">
    <Container>
      <div className={styles.heroContent}>
        <h1 className="text--secondary hero__title">
          {config.aboutUsSection.hero.title}
        </h1>
        <p className="hero__subtitle">{config.aboutUsSection.hero.subTitle}</p>
      </div>
    </Container>
  </header>
);

export default HeroSection;
