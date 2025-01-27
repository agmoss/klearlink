import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import config from '@site/klearlink.config';
import Button from '@site/src/core/Button';
import { Container } from '@site/src/core/Container';

const HeroSection = () => (
  <header className="hero hero--primary">
    <Container>
      <div className={styles.heroContent}>
        <h1 className="text--secondary hero__title">
          {config.docsSection.hero.title}
        </h1>
        <p className="hero__subtitle">{config.docsSection.hero.subTitle}</p>
        <div className={styles.buttonGroup}>
          <Button type="primary" to={useBaseUrl('/documentation/#docsform')}>
            Request Documentation
          </Button>
        </div>
      </div>
    </Container>
  </header>
);

export default HeroSection;
