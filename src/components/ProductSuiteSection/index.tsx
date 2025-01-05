// src/components/ProductSuiteSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import config, { LinkItem } from '../../../clearlinc.config';
import Card, { CardBody, CardFooter, CardHeader } from '@site/src/core/Card';

const ProductCard: React.FC<LinkItem> = ({ title, description, link }) => (
  <Card padding={true}>
    <CardHeader>
      <h3 className="section__subtitle larger">{title}</h3>
    </CardHeader>
    <CardBody>
      <p>{description}</p>
    </CardBody>
    <CardFooter>
      <Link
        className="button button--secondary button--block main"
        to={useBaseUrl(link)}
      >
        See Details
      </Link>
    </CardFooter>
  </Card>
);

const ProductSuiteSection: React.FC = () => (
  <div id="product-suite">
    <div className="row">
      {config.productSuiteSection.items.map((product, idx) => (
        <div key={idx} className="col col--4">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  </div>
);

export default ProductSuiteSection;
