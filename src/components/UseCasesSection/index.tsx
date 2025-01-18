// src/components/UseCasesSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import config, { Item } from '../../../klearlink.config';

const UseCase = ({ title, description }: Item) => (
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

const UseCasesSection: React.FC = () => (
  <div className={styles.useCases}>
    <div className="row">
      <div className="col col--12 text--center">
        <h2 className="section__title">{config.useCases.title}</h2>
      </div>
    </div>
    <div className="row margin-horiz--md">
      {config.useCases.items.map((useCase, idx) => (
        <UseCase key={idx} {...useCase} />
      ))}
    </div>
    <div className="row">
      <div className="col col--12 text--center">
        <Link
          className="button button--primary button--lg mainButton"
          to={useBaseUrl('docs/use-cases')}
        >
          {config.useCases.subTitle}
        </Link>
      </div>
    </div>
  </div>
);

export default UseCasesSection;
