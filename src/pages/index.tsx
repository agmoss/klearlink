import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/HeroSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import KeyBenefitsSection from '../components/KeyBenefitsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ProductSuiteSection from '../components/ProductSuiteSection';
import KeyInsightsSection from '../components/KeyInsightsSection';
import CTABannerSection from '../components/CTABannerSection';
import Container from '../core/Container';
import { motion } from 'framer-motion';
import SlantedArea from '../core/SlantedArea/SlantedArea';
import AccentImage from '../core/AccentImage'; // Create a reusable component for accent images

const Home: React.FC = () => {
  return (
    <Layout
      title="Clearlinc.io"
      description="Instant Credit Profiling for Smarter Lending Decisions"
    >
      <AccentImage position={{ top: '5%', left: '35%' }} src="/img/3.svg" />
      <AccentImage position={{ top: '220%', left: '-50%' }} src="/img/4.svg" />
      <AccentImage position={{ top: '200%', left: '50%' }} src="/img/4.svg" />
      <AccentImage position={{ top: '400%', left: '35%' }} src="/img/5.svg" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <div>
          <Container>
            <ProblemSolutionSection />
          </Container>
          <Container>
            <KeyBenefitsSection />
          </Container>
          <Container>
            <HowItWorksSection />
          </Container>
          <SlantedArea title="Clearlinc Product Suite">
            <ProductSuiteSection />
          </SlantedArea>
          <Container>
            <KeyInsightsSection />
          </Container>
          <CTABannerSection />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;
