// src/components/ProductSuiteSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

const ProductSuiteSection: React.FC = () => (
  <section className={clsx('section', styles.productSuite)}>
    <div className="container">
      <div className="row">
        <div className="col col--12 text--center">
          <h2 className="section__title">Clearlinc Product Suite</h2>
        </div>
      </div>
      <div className="row">
        <div className={clsx('col col--4', styles.productCard)}>
          <div className="card shadow--md">
            <div className="card__header">
              <h3 className="section__subtitle">ClearSync</h3>
            </div>
            <div className="card__body">
              <p>
                A low-overhead, encrypted, no-code ETL solution that integrates
                Clearlinc into your existing credit data effortlessly.
              </p>
            </div>
            <div className="card__footer">
              <Link
                className="button button--secondary button--block"
                to="/clearsync"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
        <div className={clsx('col col--4', styles.productCard)}>
          <div className="card shadow--md">
            <div className="card__header">
              <h3 className="section__subtitle">ClearProfile</h3>
            </div>
            <div className="card__body">
              <p>
                Profile applicants with ease—see loan status, loan stacking, and
                institution visibility.
              </p>
            </div>
            <div className="card__footer">
              <Link
                className="button button--secondary button--block"
                to="/clearprofile"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
        <div className={clsx('col col--4', styles.productCard)}>
          <div className="card shadow--md">
            <div className="card__header">
              <h3 className="section__subtitle">ClearWatch</h3>
            </div>
            <div className="card__body">
              <p>
                Get real-time notifications and monitor borrower activity across
                lenders for improved decision-making.
              </p>
            </div>
            <div className="card__footer">
              <Link
                className="button button--secondary button--block"
                to="/clearwatch"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductSuiteSection;
