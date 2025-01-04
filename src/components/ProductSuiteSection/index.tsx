// src/components/ProductSuiteSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { clsx } from 'clsx';
import config, { LinkItem } from '../../../clearlinc.config';

const ProductCard: React.FC<LinkItem> = ({ title, description, link }) => (
  <div className="col col--4">
    <div className={clsx('card', styles.largerCardPadding)}>
      <div className="card__header">
        <h3 className={clsx('section__subtitle', styles.largerSectionSubtitle)}>
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

const ProductSuiteSection: React.FC = () => (
  <div id="productsuite">
    <div className="row">
      {config.productSuiteSection.items.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  </div>
);

export default ProductSuiteSection;
