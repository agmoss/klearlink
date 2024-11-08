import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ProblemSolutionSection: React.FC = () => (
  <div>
    <div className="row">
      <div className="col col--6">
        <div className="card">
          <div className="card__header">
            <h2 className="section__title">Don’t Be Left in the Dark</h2>
            <h3 className="section__subtitle">
              {'Stop decisioning on incomplete, outdated customer data.'}
            </h3>
          </div>
          <div
            className={clsx('card__body', 'section__description', styles.text)}
          >
            <p>
              Missing, outdated data on recent debt accumulation and credit
              behavior leads to credit decisions based on inaccurate and
              incomplete insights.
            </p>
          </div>
          <div
            className={clsx('card__body', 'section__description', styles.text)}
          >
            <p>
              Clearlinc delivers encrypted real-time
              credit data every 30 minutes or less, equipping lenders with
              accurate, actionable insights into your consumer's credit behavior
              within the last 60 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProblemSolutionSection;
