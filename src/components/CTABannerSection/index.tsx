// src/components/CTABannerSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CtaBanner from '@site/src/core/CtaBanner/CtaBanner';

const CTABannerSection: React.FC = () => (
  <CtaBanner
    title="Curious to Enhance Your Credit Profiling? We’d Love to Hear from You."
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
