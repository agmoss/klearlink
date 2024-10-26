// src/components/HowItWorksSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

type StepItem = {
  title: string;
  description: string;
};

const FeatureList: StepItem[] = [
  {
    title: 'Connect & Collect',
    description:
      'Your institution links masked, securely connected data sources to Clearlinc with minimal setup.',
  },
  {
    title: 'Instant Profiling',
    description:
      'Receive an applicant match and collect real-time credit profile data on your applicant.',
  },
  {
    title: 'Informed Decision-Making',
    description:
      'Use the data to inform your decision tree, increasing your ability to make accurate credit decisions for each applicant.',
  },
];
const Feature = ({ title, description }: StepItem) => {
  return (
    <li className={clsx(styles.stepItem)}>
      <h3 className="section__subtitle">{title}</h3>
      <p className="section__description">{description}</p>
    </li>
  );
};

const HowItWorksSection: React.FC = () => (
  <section id="how-it-works" className={clsx('section', styles.howItWorks)}>
    <div className="container">
      <div className="row">
        <div className="col col--12 text--center">
          <h2 className="section__title">How It Works</h2>
          <ol className={clsx('list--unstyled', styles.steps)}>
            {FeatureList.map((feature, idx) => (
              <Feature key={idx} {...feature} />
            ))}
          </ol>
          <Link
            className="button button--primary button--lg"
            to="mailto:info@clearlinc.io"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
