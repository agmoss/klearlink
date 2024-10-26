// src/components/UseCasesSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

type UseCaseItem = {
  title: string;
  description: string;
};

const FeatureList: UseCaseItem[] = [
  {
    title: 'Positive Payment Compliance',
    description:
      'See when applicants maintain strong payment records with other lenders or are in a non-compliant state.',
  },
  {
    title: 'Bank Account Visibility',
    description:
      'Gain insight into additional bank accounts the applicant has utilized in the last 60 days, allowing you to prompt for more accurate transactional data.',
  },
  {
    title: 'Debt-to-Income Accuracy',
    description:
      'Decline high-risk applicants with reliable DTI figures based on real-time data.',
  },
  {
    title: 'Matched Monitoring',
    description:
      'Stay informed when applicants have new loan obligations elsewhere or are compliant/non-compliant on those obligations.',
  },
];

function UseCase({ title, description }: UseCaseItem) {
  return (
    <div className={clsx('col col--3', styles.caseItem)}>
      <h3 className="section__subtitle">{title}</h3>
      <p className="section__description">{description}</p>
    </div>
  );
}

const UseCasesSection: React.FC = () => (
  <section className={clsx('section-alt', styles.useCases)}>
    <div className="container">
      <div className="row">
        <div className="col col--12 text--center">
          <h2 className="section__title">Use Cases</h2>
        </div>
      </div>
      <div className="row">
        {FeatureList.map((useCase, idx) => (
          <UseCase key={idx} {...useCase} />
        ))}
      </div>
      <div className="row">
        <div className="col col--12 text--center">
          <Link className="button button--primary button--lg" to="/use-cases">
            Discover More Use Cases
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default UseCasesSection;
