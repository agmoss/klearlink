import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import config from '@site/klearlink.config';
import Button from '@site/src/core/Button';
import { Container } from '@site/src/core/Container';

const HeroSection = () => (
  <header className="hero hero--primary">
    <Container>
      <div className={styles.heroContent}>
        <h1 className="text--secondary hero__title">
          {config.heroSection.title}
        </h1>
        <p className="hero__subtitle">{config.heroSection.subTitle}</p>
        <div className={styles.buttonGroup}>
          <Button type="primary" to={useBaseUrl('/contact-us')}>
            Contact Us
          </Button>
          <Button type="primary" to={useBaseUrl('/#solutions')}>
            How It Works
          </Button>
        </div>
      </div>
    </Container>
  </header>
);

export default HeroSection;
