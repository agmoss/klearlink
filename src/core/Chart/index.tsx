import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

const data = [
  {
    taste: 'Active Accounts',
    'Credit Bureau': 80,
    'Account Aggregation': 100,
    Clearlinc: 120,
  },
  {
    taste: 'Debt/Income',
    'Credit Bureau': 80,
    'Account Aggregation': 100,
    Clearlinc: 120,
  },
  {
    taste: 'Thin File Credit',
    'Credit Bureau': 80,
    'Account Aggregation': 100,
    Clearlinc: 120,
  },
  {
    taste: 'Short Term Credit',
    'Credit Bureau': 30,
    'Account Aggregation': 50,
    Clearlinc: 120,
  },
  {
    taste: 'Loan Stacking',
    'Credit Bureau': 60,
    'Account Aggregation': 80,
    Clearlinc: 120,
  },
  {
    taste: 'BNPL Credit',
    'Credit Bureau': 50,
    'Account Aggregation': 80,
    Clearlinc: 120,
  },
  {
    taste: 'PDL Credit',
    'Credit Bureau': 50,
    'Account Aggregation': 80,
    Clearlinc: 120,
  },
  {
    taste: 'Card Credit',
    'Credit Bureau': 120,
    'Account Aggregation': 80,
    Clearlinc: 50,
  },
  {
    taste: 'Asset-Backed Credit',
    'Credit Bureau': 120,
    'Account Aggregation': 100,
    Clearlinc: 80,
  },
];
const CreditRadarChart = () => (
  <div
    style={{
      height: 500,
      minWidth: 0,
    }}
  >
    <ResponsiveRadar
      theme={{
        background: '#000000',
        axis: {
          domain: {
            line: {
              stroke: '#ffffff',
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 14,
              fill: '#ffffff',
              outlineWidth: 0,
              outlineColor: 'transparent',
            },
          },
          ticks: {
            line: {
              stroke: '#ffffff',
              strokeWidth: 1,
            },
            text: {
              fontSize: 14,
              fill: '#ffffff',
              outlineWidth: 0,
              outlineColor: 'transparent',
            },
          },
        },
      }}
      maxValue={150}
      data={data}
      keys={['Credit Bureau', 'Account Aggregation', 'Clearlinc']}
      indexBy="taste"
      valueFormat=">-.2f"
      margin={{ top: 80, right: 150, bottom: 0, left: 150 }}
      borderColor={{ from: 'color' }}
      gridLabelOffset={20}
      isInteractive={false}
      fillOpacity={0.5}
      enableDots={false}
      borderWidth={7}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      colors={['#ffffff', '#4f4f4f', '#ffd944']}
      motionConfig="wobbly"
      gridShape="circular"
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          translateX: -50,
          translateY: -60,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#ffffff',
          symbolSize: 30,
          symbolShape: 'circle',
        },
      ]}
    />
  </div>
);

export default CreditRadarChart;
