import type { IconType } from 'react-icons';
import {
  FaPiggyBank,
  FaBuilding,
  FaCalculator,
  FaChartLine,
} from 'react-icons/fa';

type Title = {
  title: string;
};

type SubTitle = {
  subTitle: string;
};

export type Section = Title & SubTitle;

export type Item = Title & {
  description: string;
};

type ProblemStatementSection = Section & {
  problemStatement: string;
  solutionOverview: string;
};

export type InsightItem = Title;

export type KeyInsightsSection = Section & {
  items: InsightItem[];
};

type ArraySection = Title & {
  items: Item[];
};
type UseCasesSection = ArraySection & SubTitle;

export type BenefitItem = Item & {
  Icon: IconType;
};

type KeyBenefitSection = Title & {
  items: BenefitItem[];
};

export type ProductItem = Item & {
  link: string;
};

type ProductSuiteSection = Title & {
  items: ProductItem[];
};

export type Config = {
  hero: Section;
  problemStatement: ProblemStatementSection;
  keyBenefits: KeyBenefitSection;
  howItWorks: ArraySection;
  productSuite: ProductSuiteSection;
  keyInsights: KeyInsightsSection;
  useCases: UseCasesSection;
  cta: Section;
};

const config: Config = {
  hero: {
    title: 'Instant Alternative Credit Profiling Data for Smarter Decisioning',
    subTitle:
      'Know your borrowers in real-time with alternative credit data and insights, so you can lend with confidence.',
  },
  problemStatement: {
    title:
      'What You Don’t See is Costing You. Don’t Be Left in the Dark Issuing Credit.',
    subTitle: 'Stop decisioning on incomplete, outdated customer data.',
    problemStatement:
      'Traditional credit data provides lagging data in a world of instant credit.  Bank account data only gives a partial view of a borrower, who typically manages two or more bank accounts.  Stop decisioning on incomplete, outdated borrower data.',
    solutionOverview:
      'Clearlinc delivers encrypted alternative credit data, empowering lenders with fresh insights into a borrower’s real-time credit activity.',
  },
  keyBenefits: {
    title: 'The Benefits Are Clear',
    items: [
      {
        title: 'Institution Awareness',
        description:
          'Know what institutions your applicant has linked within the last 60 days.',
        Icon: FaBuilding,
      },
      {
        title: 'Credit Stacking & Fraud Prevention',
        description:
          "Prevent fraud stacking and credit stacking by understanding the applicant's recent credit behavior.",
        Icon: FaPiggyBank,
      },
      {
        title: 'Debt-to-Income Precision',
        description:
          'Get an accurate debt-to-income ratio using real-time data.',
        Icon: FaCalculator,
      },
      {
        title: 'Performance Monitoring',
        description:
          'Track your borrower’s credit profile over time to enhance lifetime value and minimize default risk.',
        Icon: FaChartLine,
      },
    ],
  },
  howItWorks: {
    title: 'How It Works',
    items: [
      {
        title: 'Connect & Collect',
        description:
          'Your institution links masked, securely connected data sources to Clearlinc with minimal setup.',
      },
      {
        title: 'Instant Profiling',
        description:
          'Receive an applicant match and collect real-time credit profile data on your applicant.',
      },
      {
        title: 'Informed Decision-Making',
        description:
          'Use the data to inform your decision tree, increasing your ability to make accurate credit decisions for each applicant.',
      },
    ],
  },
  productSuite: {
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

  keyInsights: {
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
  useCases: {
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
  cta: {
    title: 'Curious to Enhance Your Credit Profiling?',
    subTitle: 'We’d Love to Hear from You.',
  },
};

export default config;
