import React from 'react';
import Layout from '@theme/Layout';
import { Section } from '../core/Container';
import HeroSection from '../components/HeroSection/documentation';
import AccentImage from '../core/AccentImage';
import DocumentationWhyChooseSection from '../components/DocumentationWhyChooseSection';
import DocumentationHowItWorksSection from '../components/DocumentationHowItWorksSection';
import DocumentationReadySection from '../components/DocumentationReadySection';
import ContactForm from '../core/ContactForm';

const Documentation: React.FC = () => {
  return (
    <Layout title="Documentation" description="klearlink.io Documentation">
      <AccentImage position={{ top: '-40%', left: '30%' }} src="/img/4.svg" />
      <main>
        <HeroSection />
        <Section className="padding--lg">
          <DocumentationWhyChooseSection />
        </Section>
        <Section className="padding--lg">
          <DocumentationHowItWorksSection />
        </Section>
        <Section className="padding--lg">
          <DocumentationReadySection />
        </Section>
        <Section className="padding--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <ContactForm side="documentation" />
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
};

export default Documentation;
