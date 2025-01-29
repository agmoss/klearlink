import type { IconType } from 'react-icons';
import {
  FaBuilding,
  FaChartLine,
  FaLayerGroup,
  FaStackOverflow,
  FaPercentage,
  FaShoppingCart,
  FaMoneyCheck,
  FaDatabase,
} from 'react-icons/fa';
import { FaComputer, FaMobileScreen, FaPerson } from 'react-icons/fa6';

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

type OutlineSection = TitleWithSubTitle & {
  items: IconItem[];
};

type KeyBenefitsSection = Title & {
  items: IconItem[];
};

type DifferenceSection = Title & {
  items: IconItem[];
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

export type AboutUsSection = {
  hero: HeroSection;
  companyOverview: {
    headline: string;
    content: string[];
  };
  teamSection: {
    headline: string;
    members: {
      name: string;
      role: string;
      image: string;
      bio: string;
    }[];
  };
};

export type DocsSection = {
  hero: HeroSection;
  ready: TitleWithSubTitle;
  whyChoose: {
    title: Title;
    items: BasicItem[];
  };
  howItWorks: {
    title: Title;
    items: BasicItem[];
  };
};

export type Config = {
  heroSection: HeroSection;
  problemStatementSection: KeyInsightsSection;
  outlineSection: OutlineSection;
  keyBenefitsSection: KeyBenefitsSection;
  differenceSection: DifferenceSection;
  howItWorksSection: HowItWorksSection;
  productSuiteSection: ProductSuiteSection;
  keyInsightsSection: KeyInsightsSection;
  useCasesSection: UseCasesSection;
  ctaSection: CtaSection;
  aboutUsSection: AboutUsSection;
  docsSection: DocsSection;
  contactUsSection: Title;
};

const config: Config = {
  contactUsSection: { title: 'Contact Us' },
  heroSection: {
    title: 'Instant Alternative Credit Data for Smarter Decisioning',
    subTitle:
      'Know your borrowers in real-time with alternative credit data and insights, so you can lend with confidence.',
  },
  problemStatementSection: {
    title: 'What You Don’t See is Costing You.',
    subTitle:
      'Start decisioning with complete, up to date credit data on your customer.',
    items: [
      {
        title:
          'Traditional credit data provides stale, incomplete and misleading data in a world of instant credit.',
      },
      {
        title:
          'Bank account data provides a partial view of a borrower who typically manages two or more bank accounts.',
      },
      {
        title:
          'KlearLink delivers encrypted alternative credit data, empowering lenders with fresh insights into a borrower’s real-time credit activity.',
      },
    ],
  },
  outlineSection: {
    title: 'All Short-Term Credit in One Solution',
    subTitle:
      'KlearLink compiles multiple types of short-term credit accessed by your customer, enabling you to gain real-time credit performance and insights to optimize your portfolio.',
    items: [
      {
        title: 'Buy-Now-Pay-Later',
        description:
          "Access your customer's buy-now-pay-later credit data and gain visibility into your customer's performance and upcoming obligations.",
        Icon: FaShoppingCart,
      },
      {
        title: 'Short-Term High Cost Credit',
        description:
          'Access payday loan credit data to confirm 1-60 day total obligations and past performance on your customer.',
        Icon: FaMoneyCheck,
      },
    ],
  },
  differenceSection: {
    title: 'The KlearLink Difference',
    items: [
      {
        title: 'Real-Time Data Access',
        Icon: FaDatabase,
        description:
          'Our API architecture enables creditors and collectors to report, update and amend accounts every 30 minutes, allowing us to maintain the most accurate view of your customer’s short-term credit obligations and performance.',
      },
      {
        title: 'Built for Today’s Fintech Products',
        Icon: FaMobileScreen,
        description:
          'KlearSync uses a format to accurately capture the details of today’s fintech products, including BNPL that feature early payments and payment adjustments.',
      },
      {
        title: 'Developer-friendly integration',
        Icon: FaComputer,
        description:
          'Clear documentation to support a smooth integration for our providers, onboarding in days not months, and reducing time-to-value for creditors and collectors.',
      },
      {
        title: 'Scalable cloud-native infrastructure',
        Icon: FaChartLine,
        description:
          'Our platform is designed to move as fast as your business needs, delivering credit information with sub-second response times, and the highest levels of compliance, and data protection.',
      },
    ],
  },
  keyBenefitsSection: {
    title: 'The Benefits Are Klear',
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
          'Link your masked, securely connected data sources to KlearLink with our developer-friendly API integration.',
      },
      {
        title: 'Collect Instant Profiles',
        description:
          'Receive a customer match (or non-match) and collect a response in seconds to gain real-time credit data and insights on your customer.',
      },
      {
        title: 'Augment Decisioning',
        description:
          'Use KlearLink data to inform your decisioning rules and modelling, improving risk-profiling and responsible approvals on your customers.',
      },
      {
        title: 'Optimize Performance',
        description:
          'Monitor your customer’s performance using CreditWatch and receive alerts on credit behaviour to optimize portfolio performance over time.',
      },
    ],
  },
  productSuiteSection: {
    title: 'KlearLink Product Suite',
    items: [
      {
        title: 'KlearSync',
        description:
          'Choose between a developer friendly API, or a low-overhead, encrypted, no-code ETL solution that integrates KlearLink into your existing credit data effortlessly.',
        link: '/products/klearsync',
      },
      {
        title: 'KlearProfile',
        description:
          'Profile applicants accurately and with ease - see real-time status of each credit including amounts, sectors of credit types, and performance history and other customer indicators.',
        link: '/products/klearprofile',
      },
      {
        title: 'KlearWatch',
        description:
          'Get real-time notifications and monitor borrower activity across lenders for improved decision-making.',
        link: '/products/klearwatch',
      },
    ],
  },
  keyInsightsSection: {
    title: 'Key Insights Provided by KlearLink',
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
  aboutUsSection: {
    hero: {
      title: 'About Us',
      subTitle:
        'In 2024, KlearLink was created by a group of fintech entrepreneurs to solve one problem: to provide real-time access to alternative credit data.  Because we believe that in a world of instant access to credit, access to credit data should be instant too.',
    },
    companyOverview: {
      headline:
        'Our mission is to bridge the credit gap by helping consumers turn alternative credit data into real-world credit opportunities.',
      content: [
        "So we created an instant method of assembling short-term and alternative credit data to empower businesses with the tools to make smarter, faster, and more informed decisions. In a world where instant credit access is the norm, understanding customers' credit behavior should be just as seamless.",
        'Our platform provides real-time credit insights designed to drive innovation, reduce fraud, and promote responsible borrowing across industries. By leveraging advanced analytics and cutting-edge technology, we help you make accurate decisions that fuel growth while minimizing risk. ',
        'KlearLink is your partner in building trust, transparency, and efficiency in credit management—because better decisions today lead to a stronger, more sustainable tomorrow.',
      ],
    },
    teamSection: {
      headline: 'Meet the Team',
      members: [
        {
          name: 'Michael Wendland',
          role: 'Co-Founder & CEO',
          image: '/img/michael.jpg',
          bio: 'A business leader and entrepreneur with over 18+ years of experience in the financial services industry, including consumer finance, mortgage lending, and credit cards. Michael founded Refresh Financial in 2010, servicing over 125,000 Canadians and recognized as one of the fastest-growing technology companies in North America until its sale in 2021.',
        },
        {
          name: 'Andrew Moss',
          role: 'Co-Founder & CTO',
          image: '/img/andrew.jpg',
          bio: 'Andrew is an accomplished tech professional holding senior leadership positions in fintech and software development brands such as Neo Financial and Vivid Theory. Andrew has successfully scaled startups from idea to exit, delivering impactful results and driving innovation.',
        },
      ],
    },
  },
  docsSection: {
    hero: {
      title: 'Seamless. Real-time. Alternative Credit Data. One Simple API.',
      subTitle:
        'Dive into the KlearLink developer-first API—engineered for speed, scalability, and seamless integration—so you can launch in days, not months.',
    },
    ready: {
      title: 'Ready to Get Started?',
      subTitle:
        'Click below to request your API documentation and someone will get in touch shortly.',
    },
    whyChoose: {
      title: { title: 'Why Choose KlearLink?' },
      items: [
        {
          title: 'Real-Time Insights',
          description:
            'Harness current alternative credit data to make smarter decisions instantly.',
        },
        {
          title: 'Effortless Integration',
          description:
            'Our API is designed with developers in mind, making onboarding intuitive and straightforward.',
        },
        {
          title: 'Built to Scale',
          description:
            'Whether you’re a startup or an enterprise, our infrastructure grows with you.',
        },
      ],
    },
    howItWorks: {
      title: { title: 'How It Works' },
      items: [
        {
          title: 'Request Access',
          description: 'Fill out a quick form to get your API key.',
        },
        {
          title: 'Explore Our Docs',
          description:
            'Access detailed documentation, sample code, and integration guides.',
        },
        {
          title: 'Start Building',
          description:
            'Connect to our API and begin leveraging real-time credit insights.',
        },
      ],
    },
  },
};

export default config;
