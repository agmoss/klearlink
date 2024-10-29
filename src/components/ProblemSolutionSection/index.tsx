import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ProblemSolutionSection: React.FC = () => (
  <div>
    <div className="row">
      <div className={clsx('col col--6')}>
        <div className={clsx('card')}>
          <div className="card__header">
            <h2 className="section__title">Don’t Be Left in the Dark</h2>
            <h3 className="section__subtitle">
              {'Lenders struggle with incomplete, outdated borrower data.'}
            </h3>
          </div>
          <div
            className={clsx('card__body', 'section__description', styles.text)}
          >
            <p>
              Missing or outdated insights into debt accumulation, number of
              linked accounts, and recent credit behavior, leading to decisions
              based on inaccurate and incomplete data.
            </p>
          </div>
          <div
            className={clsx('card__body', 'section__description', styles.text)}
          >
            <p>
              Clearlinc delivers encrypted real-time credit data every 5
              minutes, equipping lenders with accurate, actionable insights into
              an applicant’s and borrower’s credit behavior within the last 60
              days.
            </p>
          </div>
        </div>
      </div>
      <div className={clsx('col col--6', styles.imageContainer)}>
        <img
          src="/img/600.png"
          alt="Placeholder"
          className={styles.imageChild}
        />
      </div>
    </div>
  </div>
);

export default ProblemSolutionSection;
