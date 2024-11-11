// src/components/KeyBenefitsSection.tsx

import React from 'react';
import styles from './styles.module.css';

import config, { BenefitItem } from '../../../clearlinc.config';

const Benefit: React.FC<BenefitItem> = ({
  title,
  description: subTitle,
  Icon,
}) => (
  <div className="col col--3">
    <div className="blank-card">
      <div className="text--center">
        <Icon className={styles.icon} />
      </div>
      <div className="padding-horiz--md">
        <h3 className="section__subtitle">{title}</h3>
        <p className="section__description_center">{subTitle}</p>
      </div>
    </div>
  </div>
);

const KeyBenefitsSection: React.FC = () => (
  <div>
    <div className="row">
      <div className="col col--12 text--center">
        <h2 className="section__title">{config.keyBenefits.title}</h2>
      </div>
    </div>
    <div className="row">
      {config.keyBenefits.items.map((feature, idx) => (
        <Benefit key={idx} {...feature} />
      ))}
    </div>
  </div>
);

export default KeyBenefitsSection;
