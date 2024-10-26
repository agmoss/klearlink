// src/components/ProductSuiteSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

type ProductItem = {
  title: string;
  description: string;
  link: string;
};

const FeatureList: ProductItem[] = [
  {
    title: 'ClearSync',
    description:
      'A low-overhead, encrypted, no-code ETL solution that integrates Clearlinc into your existing credit data effortlessly.',
    link: '/clearsync',
  },
  {
    title: 'ClearProfile',
    description:
      'Profile applicants with ease—see loan status, loan stacking, and institution visibility.',
    link: '/clearprofile',
  },
  {
    title: 'ClearWatch',
    description:
      'Get real-time notifications and monitor borrower activity across lenders for improved decision-making.',
    link: '/clearwatch',
  },
];

function ProductCard({ title, description, link }: ProductItem) {
  return (
    <div className={clsx('col col--4', styles.productCard)}>
      <div className="card shadow--md">
        <div className="card__header">
          <h3 className="section__subtitle">{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--secondary button--block" to={link}>
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}

const ProductSuiteSection: React.FC = () => (
  <section className={clsx('section-alt', styles.productSuite)}>
    <div className="container">
      <div className="row">
        <div className="col col--12 text--center">
          <h2 className="section__title">Clearlinc Product Suite</h2>
        </div>
      </div>
      <div className="row">
        {FeatureList.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductSuiteSection;
