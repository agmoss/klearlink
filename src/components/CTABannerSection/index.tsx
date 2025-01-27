import useBaseUrl from '@docusaurus/useBaseUrl';
import config from '@site/klearlink.config';
import Button from '@site/src/core/Button';
import styles from './styles.module.css';
import React from 'react';
import clsx from 'clsx';

const CTABannerSection: React.FC = () => (
  <div
    id="cta-banner"
    className={clsx(styles.background, 'padding-vert--xl', 'text--center')}
  >
    <div className="row">
      <div className="col col--12r">
        <h4 className=" section__title alt">{config.ctaSection.title}</h4>
        <h4 className="text--secondary section__title alt">
          {config.ctaSection.subTitle}
        </h4>
        <Button type="secondary" to={useBaseUrl('contact-us')}>
          Get More Info
        </Button>
      </div>
    </div>
  </div>
);

export default CTABannerSection;
