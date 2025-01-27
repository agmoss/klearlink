import React from 'react';
import Layout from '@theme/Layout';
import { Section } from '../core/Container';
import HeroSection from '../components/HeroSection/about-us';
import AccentImage from '../core/AccentImage';
import CompanyOverviewSection from '../components/CompanyOverviewSection';
import TeamSection from '../components/TeamSection';

const AboutUs: React.FC = () => {
  return (
    <Layout title="About Us" description="Learn more about us at klearlink.io">
      <AccentImage position={{ top: '-20%', left: '30%' }} src="/img/5.svg" />
      <main>
        <HeroSection />
        <Section className="padding-vert--xl">
          <CompanyOverviewSection />
        </Section>
        <Section className="padding-vert--md">
          <TeamSection />
        </Section>
      </main>
    </Layout>
  );
};

export default AboutUs;
