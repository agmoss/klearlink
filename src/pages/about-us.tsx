import React from 'react';
import Layout from '@theme/Layout';
import Container from '../core/Container';
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
        <Container className="padding-vert--xl">
          <CompanyOverviewSection />
        </Container>
        <Container className="padding-vert--md">
          <TeamSection />
        </Container>
      </main>
    </Layout>
  );
};

export default AboutUs;
