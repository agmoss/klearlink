// src/components/ContactUsSection.tsx

import React from 'react';
import Image from '../../core/Image';

import Card, { CardBody, CardHeader } from '@site/src/core/Card';
import { FaEnvelope } from 'react-icons/fa';

const AssetImage: Image = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  Svg: require('@site/static/img/2.svg').default,
};

const ContactUsSection: React.FC = () => (
  <div id="contact-us-section">
    <div className="row">
      <div className="col col--5">
        <Card>
          <CardHeader>
            <h2 className="section__title">Contact Us</h2>
          </CardHeader>
          <CardBody>
            <div className="text--center">
              <FaEnvelope className="icon" />
              <h2>Email Us</h2>
              <p>michael@clearlinc.io</p>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col col--7">
        <div className="card">
          <AssetImage.Svg className="responsive-image" role="img" />
        </div>
      </div>
    </div>
  </div>
);

export default ContactUsSection;
