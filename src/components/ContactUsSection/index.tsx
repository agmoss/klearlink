import React from 'react';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';
import ContactForm from '@site/src/core/ContactForm';
import config from '@site/klearlink.config';

const ContactUsSection: React.FC = () => (
  <div id="contact-us-section">
    <div className="row">
      <div className="col col--6">
        <Card>
          <CardHeader>
            <h1 className="text--secondary hero__title">
              {config.contactUsSection.title}
            </h1>
          </CardHeader>
          <CardBody>
            <ContactForm side="contact" />
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
);

export default ContactUsSection;
