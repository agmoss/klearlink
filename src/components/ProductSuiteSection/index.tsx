// src/components/ProductSuiteSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { clsx } from 'clsx';

type ProductItem = {
  title: string;
  description: string;
  link: string;
};

const FeatureList: ProductItem[] = [
  {
    title: 'ClearSync',
    description:
      'A low-overhead, encrypted, no-code solution utilizing ETL or APIs that integrate Clearlinc into your existing credit data effortlessly.',
    link: '/docs/products/clearsync',
  },
  {
    title: 'ClearProfile',
    description:
      'Profile consumers with ease—see loan status, loan stacking, and institution visibility.',
    link: '/docs/products/clearprofile',
  },
  {
    title: 'ClearWatch',
    description:
      'Get real-time notifications and monitor consumer activity across lenders for improved decision-making.',
    link: '/docs/products/clearwatch',
  },
];

function ProductCard({ title, description, link }: ProductItem) {
  return (
    <div className="col col--4">
      <div className={clsx('card', styles.largerCardPadding)}>
        <div className="card__header">
          <h3
            className={clsx('section__subtitle', styles.largerSectionSubtitle)}
          >
            {title}
          </h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link
            className="button button--secondary button--block mainButton"
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
