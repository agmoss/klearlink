// src/components/HowItWorksSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import config, { Item } from '../../../klearlink.config';

const Feature: React.FC<Item> = ({ title, description }) => (
  <li className={styles.stepItem}>
    <h3 className="section__subtitle">{title}</h3>
    <p className="section__description_center">{description}</p>
  </li>
);

const HowItWorksSection: React.FC = () => (
  <div id="how-it-works">
    <div className="row">
      <div className="col col--12 text--center">
        <h2 className="section__title h2">{config.howItWorks.title}</h2>
        <ol className={clsx('list--unstyled', styles.steps)}>
          {config.howItWorks.items.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </ol>
        <Link
          className="button button--primary button--lg mainButton"
          to={useBaseUrl('/docs')}
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

export default HowItWorksSection;
