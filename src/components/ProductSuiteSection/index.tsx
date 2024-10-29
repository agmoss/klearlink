// src/components/ProductSuiteSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
    link: '/docs/products/clearsync',
  },
  {
    title: 'ClearProfile',
    description:
      'Profile applicants with ease—see loan status, loan stacking, and institution visibility.',
    link: '/docs/products/clearprofile',
  },
  {
    title: 'ClearWatch',
    description:
      'Get real-time notifications and monitor borrower activity across lenders for improved decision-making.',
    link: '/docs/products/clearwatch',
  },
];

function ProductCard({ title, description, link }: ProductItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card shadow--md">
        <div className="card__header">
          <h3 className="section__subtitle">{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link
            className="button button--secondary button--block secondaryButton"
            to={useBaseUrl(link)}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}

const ProductSuiteSection: React.FC = () => (
  <div>
    <div className="row">
      {FeatureList.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  </div>
);

export default ProductSuiteSection;
