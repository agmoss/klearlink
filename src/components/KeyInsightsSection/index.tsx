// src/components/KeyInsightsSection.tsx

import React from 'react';
import clsx from 'clsx';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './styles.module.css';
import config, { InsightItem } from '../../../clearlinc.config';

const Insight: React.FC<InsightItem> = ({ title }) => (
  <li className={clsx('section__list-item', styles.insightItem)}>
    <FaCheckCircle className={styles.icon} />
    {title}
  </li>
);

const KeyInsightsSection: React.FC = () => (
  <div className="row">
    <div className="col col--7 text--center">
      <div className="card">
        <div className="card__header">
          <h2 className="section__title">{config.keyInsightsSection.title}</h2>
          <h3 className="section__subtitle">
            {config.keyInsightsSection.subTitle}
          </h3>
        </div>
        <div className="card__body">
          <ul className={clsx('list--unstyled', styles.insightsList)}>
            {config.keyInsightsSection.items.map((insight, idx) => (
              <Insight key={idx} {...insight} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default KeyInsightsSection;
