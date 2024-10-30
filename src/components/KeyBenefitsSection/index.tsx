// src/components/KeyBenefitsSection.tsx

import React from 'react';
import styles from './styles.module.css';
import {
  FaPiggyBank,
  FaBuilding,
  FaCalculator,
  FaChartLine,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

type BenefitItem = {
  title: string;
  description: string;
  Icon: IconType;
};

const FeatureList: BenefitItem[] = [
  {
    title: 'Institution Awareness',
    description:
      'Know what institutions your applicant has linked within the last 60 days.',
    Icon: FaBuilding,
  },
  {
    title: 'Fraud Prevention',
    description:
      "Prevent fraud by understanding the applicant's recent credit behavior.",
    Icon: FaPiggyBank,
  },
  {
    title: 'Debt-to-Income Precision',
    description: 'Get an accurate debt-to-income ratio using real-time data.',
    Icon: FaCalculator,
  },
  {
    title: 'Performance Monitoring',
    description:
      'Track your borrower’s credit profile over time to enhance lifetime value and minimize risk.',
    Icon: FaChartLine,
  },
];

const Benefit = ({ title, description, Icon }: BenefitItem) => {
  return (
    <div className="col col--3">
      <div className="text--center">
        <Icon className={styles.icon} />
      </div>
      <div className="padding-horiz--md">
        <h3 className="section__subtitle">{title}</h3>
        <p className="section__description">{description}</p>
      </div>
    </div>
  );
};

const KeyBenefitsSection: React.FC = () => (
  <div>
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
);

export default KeyBenefitsSection;
