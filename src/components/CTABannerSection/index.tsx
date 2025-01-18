// src/components/CTABannerSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CtaBanner from '@site/src/core/CtaBanner/CtaBanner';
import config from '../../../klearlink.config';

const CTABannerSection: React.FC = () => (
  <CtaBanner
    title={config.cta.title}
    title2={config.cta.subTitle}
    link={
      <Link
        className="button button--primary button--lg outlinedButton"
        to={useBaseUrl('contact-us')}
      >
        Get More Info
      </Link>
    }
  />
);

export default CTABannerSection;
