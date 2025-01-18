// src/components/HeroSection/about-us.tsx

import React from 'react';
import styles from './styles.module.css';

const HeroSection = () => (
  <header className="hero hero--primary">
    <div className="container">
      <div className={styles.heroContent}>
        <h1 className="hero__title text--bold text--secondary">About Us</h1>
        <p className="hero__subtitle">
          In 2024, Klearlink was born by a group of fintech entrepreneurs to
          answer one question: access to credit is instant for consumers, so why
          isn’t access to credit data instant?
        </p>
      </div>
    </div>
  </header>
);

export default HeroSection;
