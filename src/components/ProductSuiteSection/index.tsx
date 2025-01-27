import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Card, { CardBody, CardFooter, CardHeader } from '@site/src/core/Card';
import config, { LinkItem } from '@site/klearlink.config';
import Button from '@site/src/core/Button';

const ProductCard: React.FC<LinkItem> = ({ title, description, link }) => (
  <Card alt>
    <CardHeader>
      <h3 className="section__subtitle">{title}</h3>
    </CardHeader>
    <CardBody>
      <p>{description}</p>
    </CardBody>
    <CardFooter>
      <Button type="primary" className="button--block" to={useBaseUrl(link)}>
        See Details
      </Button>
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
