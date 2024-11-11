import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import config from '../../../clearlinc.config';

const ProblemSolutionSection: React.FC = () => (
  <div>
    <div className="row">
      <div className="col col--6">
        <div className="card">
          <div className="card__header">
            <h2 className="section__title">{config.problemStatement.title}</h2>
            <h3 className="section__subtitle">
              {config.problemStatement.subTitle}
            </h3>
          </div>
          <div
            className={clsx('card__body', 'section__description', styles.text)}
          >
            <p>{config.problemStatement.problemStatement}</p>
          </div>
          <div
            className={clsx('card__body', 'section__description', styles.text)}
          >
            <p>{config.problemStatement.solutionOverview}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProblemSolutionSection;
