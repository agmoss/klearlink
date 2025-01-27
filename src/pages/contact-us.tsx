import React from 'react';
import Layout from '@theme/Layout';
import { Section } from '../core/Container';
import ContactUsSection from '../components/ContactUsSection';
import AccentImage from '../core/AccentImage';

const ContactUs: React.FC = () => {
  return (
    <Layout
      title="klearlink.io"
      description="Instant Credit Profiling for Smarter Lending Decisions"
    >
      <AccentImage position={{ top: '-40%', left: '40%' }} src="/img/3.svg" />
      <Section className="padding--xl">
        <ContactUsSection />
      </Section>
    </Layout>
  );
};

export default ContactUs;
