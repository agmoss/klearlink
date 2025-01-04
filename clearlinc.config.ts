import type { IconType } from 'react-icons';
import {
  FaPiggyBank,
  FaBuilding,
  FaCalculator,
  FaChartLine,
  FaLayerGroup,
  FaStackOverflow,
  FaPercentage,
  FaShoppingCart,
  FaBriefcase,
  FaMoneyCheck,
} from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';

export type Title = {
  title: string;
};

type TitleWithSubTitle = Title & {
  subTitle: string;
};

export type BasicItem = Title & {
  description: string;
};

export type IconItem = BasicItem & {
  Icon: IconType;
};

export type LinkItem = BasicItem & {
  link: string;
};

type HeroSection = TitleWithSubTitle;

type ProblemStatementSection = TitleWithSubTitle & {
  problem: string;
  solution: string;
};

type OutlineSection = TitleWithSubTitle & {
  items: IconItem[];
};

type KeyBenefitsSection = Title & {
  items: IconItem[];
};

type DifferenceSection = Title & {
  items: BasicItem[];
};

type HowItWorksSection = Title & {
  items: BasicItem[];
};

type ProductSuiteSection = Title & {
  items: LinkItem[];
};

type KeyInsightsSection = TitleWithSubTitle & {
  items: Title[];
};

type UseCasesSection = TitleWithSubTitle & {
  items: BasicItem[];
};

type CtaSection = TitleWithSubTitle;

export type Config = {
  heroSection: HeroSection;
  problemStatementSection: ProblemStatementSection;
  outlineSection: OutlineSection;
  keyBenefitsSection: KeyBenefitsSection;
  differenceSection: DifferenceSection;
  howItWorksSection: HowItWorksSection;
  productSuiteSection: ProductSuiteSection;
  keyInsightsSection: KeyInsightsSection;
  useCasesSection: UseCasesSection;
  ctaSection: CtaSection;
};

const config: Config = {
  heroSection: {
    title: 'Instant Alternative Credit Profiling Data for Smarter Decisioning',
    subTitle:
      'Know your borrowers in real-time with alternative credit data and insights, so you can lend with confidence.',
  },
  problemStatementSection: {
    title: 'What You Don’t See is Costing You.',
    subTitle: 'Don’t Be Left in the Dark Issuing Credit.',
    problem:
      'Traditional credit data provides stale, incomplete and misleading data in a world of instant credit.  Bank account data provides a partial view of a borrower who typically manages two or more bank accounts.',
    solution:
      'Clearlinc delivers encrypted alternative credit data, empowering lenders with fresh insights into a borrower’s real-time credit activity.',
  },
  outlineSection: {
    title: 'All Short-Term Credit in One Solution',
    subTitle:
      'Clearlinc compiles multiples types of short-term credit accessed by your customer, enabling you to gain real-time credit performance and insights to optimize your portfolio.',
    items: [
      {
        title: 'Buy-Now-Pay-Later',
        description: 'Access your customer’s buy-now-pay-later credit data.',
        Icon: FaShoppingCart,
      },
      {
        title: 'Short-Term High Cost Credit',
        description:
          'Access payday loan credit data to understand 30-60 day obligations.',
        Icon: FaMoneyCheck,
      },
      {
        title: 'Earned Wage Access',
        description: 'Available in V3',
        Icon: FaBriefcase,
      },
    ],
  },
  differenceSection: {
    title: 'The Clearlinc Difference',
    items: [
      {
        title: 'Real-Time Data Access',
        description:
          'Our API architecture enables creditors and collectors to report, update and amend accounts every 30 minutes, allowing us to maintain the most accurate view of your customer’s short-term credit obligations and performance',
      },
      {
        title: 'Built for Today’s Fintech Products',
        description:
          'Clearsync uses a format to accurately capture the details today’s fintech products, including BNPL that feature early payments and payment adjustments.',
      },
      {
        title: 'Developer-friendly integration',
        description:
          'Clear documentation to support a smooth integration for our providers, onboarding in days not months, and reducing time-to-value for creditors and collectors.',
      },
      {
        title: 'Scalable cloud-native infrastructure',
        description:
          'Our platform is designed to move as fast as your business needs, delivering credit information with sub-second response times, and the highest levels of compliance, and data protection.',
      },
    ],
  },
  keyBenefitsSection: {
    title: 'The Benefits Are Clear',
    items: [
      {
        title: 'Reduce Credit Stacking',
        description:
          'Know exactly how much credit your customer has accumulated in the last 60 days, and reduce your portfolio risk from credit stacking.',
        Icon: FaLayerGroup,
      },
      {
        title: 'Prevent Fraud Stacking',
        description:
          'By seeing the velocity of credit acquired in the last 60 days, you can improve your portfolio performance by preventing fraud stacking.',
        Icon: FaStackOverflow,
      },
      {
        title: 'Identify New Customers',
        description:
          'With visibility into short-term credit usage and performance, unlock credit to a new segment of credit invisible or traditional “thin file” customers.',
        Icon: FaPerson,
      },
      {
        title: 'Portfolio Optimization',
        description:
          'Track your borrower’s credit profile over time to enhance lifetime value and minimize default risk.',
        Icon: FaChartLine,
      },
      {
        title: 'Debt-to-Income Precision',
        description:
          'Get an accurate debt-to-income ratio using real-time data.',
        Icon: FaPercentage,
      },
      {
        title: 'Institutional Awareness',
        description:
          'Know what institutions your applicant has linked within the last 60 days.',
        Icon: FaBuilding,
      },
    ],
  },
  howItWorksSection: {
    title: 'How It Works',
    items: [
      {
        title: 'Connect',
        description:
          'Link your masked, securely connected data sources to Clearlinc with our developer-friendly API integration.',
      },
      {
        title: 'Collect Instant Profiles',
        description:
          'Receive a customer match (or non-match) and collect a response in seconds to gain real-time credit data and insights on your customer.',
      },
      {
        title: 'Augment Decisioning',
        description:
          'Use Clearlinc data to inform your decisioning rules and modelling, improving risk-profiling and responsible approvals on your customers.',
      },
      {
        title: 'Optimize Performance',
        description:
          'Monitor your customer’s performance using CreditWatch and receive alerts on credit behaviour to optimize portfolio performance over time.',
      },
    ],
  },
  productSuiteSection: {
    title: 'Clearlinc Product Suite',
    items: [
      {
        title: 'ClearSync',
        description:
          'A low-overhead, encrypted, no-code ETL solution that integrates Clearlinc into your existing credit data effortlessly.',
        link: '/docs/products/clearsync',
      },
      {
        title: 'ClearProfile',
        description:
          'Profile applicants with ease—see loan status, loan stacking, and institution visibility.',
        link: '/docs/products/clearprofile',
      },
      {
        title: 'ClearWatch',
        description:
          'Get real-time notifications and monitor borrower activity across lenders for improved decision-making.',
        link: '/docs/products/clearwatch',
      },
    ],
  },
  keyInsightsSection: {
    title: 'Key Insights Provided by Clearlinc',
    subTitle: 'Discover essential data and insights for smarter decisioning.',
    items: [
      { title: 'Application Date & Time' },
      { title: 'Origination Date & Time' },
      { title: 'Credit Amount' },
      { title: 'Payment Compliance & Non-Compliance' },
      { title: 'Linked Institutions' },
      { title: 'Customer Indicators' },
    ],
  },
  useCasesSection: {
    title: 'Use Cases',
    subTitle: 'Discover more use cases',
    items: [
      {
        title: 'Positive Payment Compliance',
        description:
          'See when consumers maintain strong payment records with other lenders or are in a non-compliant state.',
      },
      {
        title: 'Bank Account Visibility',
        description:
          'Gain insight into additional bank accounts the consumer has utilized in the last 60 days, allowing you to prompt for more accurate transactional data.',
      },
      {
        title: 'Debt-to-Income Accuracy',
        description:
          'Decline high-risk consumers with reliable DTI figures based on real-time data.',
      },
      {
        title: 'Matched Monitoring',
        description:
          'Stay informed when consumers have new loan obligations elsewhere or are compliant/non-compliant on those obligations.',
      },
    ],
  },
  ctaSection: {
    title: 'Curious to Enhance Your Credit Profiling?',
    subTitle: 'We’d Love to Hear from You.',
  },
};

export default config;
