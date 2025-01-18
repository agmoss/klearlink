// src/components/ProductSuiteSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Card, { CardBody, CardFooter, CardHeader } from '@site/src/core/Card';
import config, { LinkItem } from '../../../klearlink.config';

const ProductCard: React.FC<LinkItem> = ({ title, description, link }) => (
  <Card alt>
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
      <div className="col col--12 text--center">
        <h2 className="section__title">{config.productSuiteSection.title}</h2>
      </div>
    </div>
    <div className="row">
      {config.productSuiteSection.items.map((product, idx) => (
        <div key={idx} className="col col--4 padding--md">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  </div>
);

export default ProductSuiteSection;
