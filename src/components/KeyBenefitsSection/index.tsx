// src/components/KeyBenefitsSection.tsx

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type BenefitItem = {
  title: string;
  description: string;
  imageUrl: string; // New property for the image URL
};

const FeatureList: BenefitItem[] = [
  {
    title: 'Institution Awareness',
    description:
      'Know what institutions your applicant has linked within the last 60 days.',
    imageUrl: 'https://via.placeholder.com/50', // Placeholder image URL
  },
  {
    title: 'Fraud Prevention',
    description:
      "Prevent fraud by understanding the applicant's recent credit behavior.",
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    title: 'Debt-to-Income Precision',
    description: 'Get an accurate debt-to-income ratio using real-time data.',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    title: 'Performance Monitoring',
    description:
      'Track your borrower’s credit profile over time to enhance lifetime value and minimize risk.',
    imageUrl: 'https://via.placeholder.com/50',
  },
];

const Benefit = ({ title, description, imageUrl }: BenefitItem) => {
  return (
    <div className={clsx('col col--3', styles.benefitItem)}>
      <div className="text--center">
        <img src={imageUrl} alt={title} className={styles.benefitIcon} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="section__subtitle">{title}</h3>
        <p className="section__description">{description}</p>
      </div>
    </div>
  );
};

const KeyBenefitsSection: React.FC = () => (
  <section className={clsx('section-alt', styles.keyBenefits)}>
    <div className="container">
      <div className="row">
        <div className="col col--12 text--center">
          <h2 className="section__title">The Benefits Are Clear</h2>
        </div>
      </div>
      <div className="row">
        {FeatureList.map((feature, idx) => (
          <Benefit key={idx} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default KeyBenefitsSection;
