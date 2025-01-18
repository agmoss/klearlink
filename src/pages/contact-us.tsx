import React from 'react';
import Layout from '@theme/Layout';
import Container from '../core/Container';
import ContactUsSection from '../components/ContactUsSection';

const ContactUs: React.FC = () => {
  return (
    <Layout
      title="Klearlink.io"
      description="Instant Credit Profiling for Smarter Lending Decisions"
    >
      <Container className="padding--xl">
        <ContactUsSection />
      </Container>
    </Layout>
  );
};

export default ContactUs;
