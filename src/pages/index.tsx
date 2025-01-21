import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/HeroSection';
import ProblemStatementSection from '../components/ProblemStatementSection';
import OutlineSection from '../components/OutlineSection';
import KeyBenefitsSection from '../components/KeyBenefitsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ProductSuiteSection from '../components/ProductSuiteSection';
import KeyInsightsSection from '../components/KeyInsightsSection';
import CTABannerSection from '../components/CTABannerSection';
import Container from '../core/Container';
import { motion } from 'framer-motion';
import AccentImage from '../core/AccentImage'; // Create a reusable component for accent images
import DifferenceSection from '../components/DifferenceSection';

const Home: React.FC = () => {
  return (
    <Layout
      title="klearlink.io"
      description="Instant Credit Profiling for Smarter Lending Decisions"
    >
      <AccentImage position={{ top: '-40%', left: '35%' }} src="/img/3.svg" />
      <AccentImage position={{ top: '250%', left: '-50%' }} src="/img/4.svg" />
      <AccentImage position={{ top: '190%', left: '50%' }} src="/img/4.svg" />
      <AccentImage position={{ top: '530%', left: '-50%' }} src="/img/4.svg" />
      <AccentImage position={{ top: '420%', left: '50%' }} src="/img/4.svg" />
      <AccentImage position={{ top: '660%', left: '-35%' }} src="/img/5.svg" />
      <AccentImage position={{ top: '760%', left: '35%' }} src="/img/5.svg" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <div>
          <Container className="padding-vert--xl">
            <ProblemStatementSection />
          </Container>
          <Container className="padding-vert--xl">
            <OutlineSection />
          </Container>
          <Container className="padding-vert--xl">
            <DifferenceSection />
          </Container>
          <Container className="padding-vert--xl">
            <KeyBenefitsSection />
          </Container>
          <Container className="padding-vert--xl">
            <HowItWorksSection />
          </Container>
          <Container className="padding-vert--xl">
            <ProductSuiteSection />
          </Container>
          <Container className="padding-vert--xl">
            <KeyInsightsSection />
          </Container>
          <CTABannerSection />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;
