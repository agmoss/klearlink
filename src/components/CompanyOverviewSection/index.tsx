// src/components/CompanyOverviewSection.tsx

import React from 'react';
import config from '../../../clearlinc.config';

import Card, { CardBody, CardHeader } from '@site/src/core/Card';

const CompanyOverviewSection: React.FC = () => (
  <div id="company-overview">
    <div className="row">
      <div className="col col--8 col--offset-2">
        <Card>
          <CardHeader>
            <h2 className="text--center text--bold text--secondary">
              {config.aboutUsSection.companyOverview.headline}
            </h2>
          </CardHeader>
          <CardBody>
            <p>{config.aboutUsSection.companyOverview.content}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
);

export default CompanyOverviewSection;
