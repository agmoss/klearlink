import React from 'react';
import Layout from '@theme/Layout';
import Container from '../core/Container';
import ContactUsSection from '../components/ContactUsSection';
import AccentImage from '../core/AccentImage';

const ContactUs: React.FC = () => {
  return (
    <Layout
      title="Klearlink.io"
      description="Instant Credit Profiling for Smarter Lending Decisions"
    >
      <AccentImage position={{ top: '-40%', left: '40%' }} src="/img/3.svg" />
      <Container className="padding--xl">
        <ContactUsSection />
      </Container>
    </Layout>
  );
};

export default ContactUs;
