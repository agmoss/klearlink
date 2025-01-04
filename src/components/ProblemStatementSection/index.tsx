import React from 'react';
import clsx from 'clsx';
import config from '../../../clearlinc.config';

const ProblemStatementSection: React.FC = () => (
  <div>
    <div className="row">
      <div className="col col--6">
        <div className="card">
          <div className="card__header">
            <h2 className="section__title">
              {config.problemStatementSection.title}
            </h2>
            <h3 className="section__subtitle">
              {config.problemStatementSection.subTitle}
            </h3>
          </div>
          <div className={clsx('card__body', 'section__content')}>
            <p>{config.problemStatementSection.problem}</p>
          </div>
          <div className={clsx('card__body', 'section__content')}>
            <p>{config.problemStatementSection.solution}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProblemStatementSection;
