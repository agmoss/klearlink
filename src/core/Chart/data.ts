type DataPoint = {
  insight: string;
  'Credit Bureau': number;
  'Account Aggregation': number;
  KlearLink: number;
};

export const data: DataPoint[] = [
  {
    insight: 'Active Accounts',
    'Credit Bureau': 80,
    'Account Aggregation': 100,
    KlearLink: 120,
  },
  {
    insight: 'Debt/Income',
    'Credit Bureau': 80,
    'Account Aggregation': 100,
    KlearLink: 120,
  },
  {
    insight: 'Thin File Credit',
    'Credit Bureau': 80,
    'Account Aggregation': 100,
    KlearLink: 120,
  },
  {
    insight: 'Short Term Credit',
    'Credit Bureau': 30,
    'Account Aggregation': 50,
    KlearLink: 120,
  },
  {
    insight: 'Loan Stacking',
    'Credit Bureau': 60,
    'Account Aggregation': 80,
    KlearLink: 120,
  },
  {
    insight: 'BNPL Credit',
    'Credit Bureau': 50,
    'Account Aggregation': 80,
    KlearLink: 120,
  },
  {
    insight: 'PDL Credit',
    'Credit Bureau': 50,
    'Account Aggregation': 80,
    KlearLink: 120,
  },
  {
    insight: 'Card Credit',
    'Credit Bureau': 120,
    'Account Aggregation': 80,
    KlearLink: 50,
  },
  {
    insight: 'Asset-Backed Credit',
    'Credit Bureau': 120,
    'Account Aggregation': 100,
    KlearLink: 80,
  },
];
