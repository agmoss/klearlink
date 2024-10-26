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

const Home: React.FC = () => {
  return (
    <Layout
      title="Clearlinc.io"
      description="Instant Credit Profiling for Smarter Lending Decisions"
    >
      <HeroSection />
      <ProblemSolutionSection />
      <KeyBenefitsSection />
      <HowItWorksSection />
      <ProductSuiteSection />
      <KeyInsightsSection />
      <UseCasesSection />
      <CTABannerSection />
    </Layout>
  );
};

export default Home;
