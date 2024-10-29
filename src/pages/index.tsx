import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/HeroSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import KeyBenefitsSection from '../components/KeyBenefitsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ProductSuiteSection from '../components/ProductSuiteSection';
import KeyInsightsSection from '../components/KeyInsightsSection';
import UseCasesSection from '../components/UseCasesSection';
import CTABannerSection from '../components/CTABannerSection';
import Container from '../core/Container';
import { motion } from 'framer-motion';
import SlantedArea from '../core/SlantedArea/SlantedArea';

const Home: React.FC = () => {
  return (
    <Layout
      title="Clearlinc.io"
      description="Instant Credit Profiling for Smarter Lending Decisions"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <div className="homePage mainContainer">
          <Container className="section" background="dark">
            <ProblemSolutionSection />
          </Container>
          <Container className="section" background="light">
            <KeyBenefitsSection />
          </Container>
          <Container className="section" background="dark">
            <HowItWorksSection />
          </Container>
          <SlantedArea title="Clearlinc Product Suite">
            <ProductSuiteSection />
          </SlantedArea>
          <Container className="section" background="dark">
            <KeyInsightsSection />
          </Container>
          <Container className="section" background="light">
            <UseCasesSection />
          </Container>
          <CTABannerSection />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;
