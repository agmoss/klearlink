// src/components/ContactUsSection.tsx

import React from 'react';
import Card, { CardBody, CardHeader } from '@site/src/core/Card';
import ContactForm from '@site/src/core/ContactForm';

const ContactUsSection: React.FC = () => (
  <div id="contact-us-section">
    <div className="row">
      <div className="col col--6">
        <Card>
          <CardHeader>
            <h2 className="section__title">Contact Us</h2>
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
