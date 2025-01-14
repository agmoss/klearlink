import React from 'react';
import Layout from '@theme/Layout';
import Container from '../core/Container';
import HeroSection from '../components/HeroSection/documentation';
import AccentImage from '../core/AccentImage';
import DocumentationWhyChooseSection from '../components/DocumentationWhyChoose';
import DocumentationHowItWorksSection from '../components/DocumentationHowItWorks';
import DocsForm from '../components/DocsForm';

const Documentation: React.FC = () => {
  return (
    <Layout title="Documentation" description="Clearlinc.io Documentation">
      <AccentImage position={{ top: '-40%', left: '30%' }} src="/img/4.svg" />
      <main>
        <HeroSection />
        <Container className="padding--lg">
          <DocumentationWhyChooseSection />
        </Container>
        <Container className="padding--lg">
          <DocumentationHowItWorksSection />
        </Container>
        <Container className="padding--xl">
          <DocsForm />
        </Container>
      </main>
    </Layout>
  );
};

export default Documentation;
