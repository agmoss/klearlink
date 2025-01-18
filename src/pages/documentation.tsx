import React from 'react';
import Layout from '@theme/Layout';
import Container from '../core/Container';
import HeroSection from '../components/HeroSection/documentation';
import AccentImage from '../core/AccentImage';
import DocumentationWhyChooseSection from '../components/DocumentationWhyChooseSection';
import DocumentationHowItWorksSection from '../components/DocumentationHowItWorksSection';
import DocumentationReadySection from '../components/DocumentationReadySection';
import ContactForm from '../core/ContactForm';

const Documentation: React.FC = () => {
  return (
    <Layout title="Documentation" description="Klearlink.io Documentation">
      <AccentImage position={{ top: '-40%', left: '30%' }} src="/img/4.svg" />
      <main>
        <HeroSection />
        <Container className="padding--lg">
          <DocumentationWhyChooseSection />
        </Container>
        <Container className="padding--lg">
          <DocumentationHowItWorksSection />
        </Container>
        <Container className="padding--lg">
          <DocumentationReadySection />
        </Container>
        <Container className="padding--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <ContactForm side="documentation" />
            </div>
          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default Documentation;
