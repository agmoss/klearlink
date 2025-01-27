import React from 'react';
import config from '@site/klearlink.config';

import Card, { CardBody, CardHeader } from '@site/src/core/Card';

const CompanyOverviewSection: React.FC = () => (
  <div id="company-overview">
    <div className="row">
      <div className="col col--8 col--offset-2">
        <Card>
          <CardHeader>
            <h3 className="text--secondary">
              {config.aboutUsSection.companyOverview.headline}
            </h3>
          </CardHeader>
          <CardBody>
            {config.aboutUsSection.companyOverview.content.map(
              (insight, idx) => (
                <p key={idx}>{insight}</p>
              ),
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
);

export default CompanyOverviewSection;
