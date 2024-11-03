// src/components/UseCasesSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type UseCaseItem = {
  title: string;
  description: string;
};

const FeatureList: UseCaseItem[] = [
  {
    title: 'Positive Payment Compliance',
    description:
      'See when consumers maintain strong payment records with other lenders or are in a non-compliant state.',
  },
  {
    title: 'Bank Account Visibility',
    description:
      'Gain insight into additional bank accounts the consumer has utilized in the last 60 days, allowing you to prompt for more accurate transactional data.',
  },
  {
    title: 'Debt-to-Income Accuracy',
    description:
      'Decline high-risk consumers with reliable DTI figures based on real-time data.',
  },
  {
    title: 'Matched Monitoring',
    description:
      'Stay informed when consumers have new loan obligations elsewhere or are compliant/non-compliant on those obligations.',
  },
];

function UseCase({ title, description }: UseCaseItem) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className="card">
        <div className="card__header">
          <h3 className="section__subtitle">{title}</h3>
        </div>
        <div className="card__body">
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
}

const UseCasesSection: React.FC = () => (
  <div className={styles.useCases}>
    <div className="row">
      <div className="col col--12 text--center">
        <h2 className="section__title">Use Cases</h2>
      </div>
    </div>
    <div className="row margin-horiz--md">
      {FeatureList.map((useCase, idx) => (
        <UseCase key={idx} {...useCase} />
      ))}
    </div>
    <div className="row">
      <div className="col col--12 text--center">
        <Link
          className="button button--primary button--lg mainButton"
          to={useBaseUrl('docs/use-cases')}
        >
          Discover More Use Cases
        </Link>
      </div>
    </div>
  </div>
);

export default UseCasesSection;
