import React from 'react';
import { RadarSliceTooltipProps, ResponsiveRadar } from '@nivo/radar';
import { data } from './data';

const CustomSliceTooltip: React.FC<RadarSliceTooltipProps> = ({
  data,
  index,
}) => {
  const fixedOrder = ['KlearLink', 'Credit Bureau', 'Account Aggregation'];

  const sortedValues = [...data].sort((a, b) => b.value - a.value);
  const valueToLabel: Record<number, string> = {};

  sortedValues.forEach((datum, rank) => {
    valueToLabel[datum.value] =
      rank === 0 ? 'Great' : rank === 1 ? 'Good' : 'Lacking';
  });

  const getValueLabel = (value: number): string => valueToLabel[value];

  const orderedData = fixedOrder.map((key) =>
    data.find((item) => item.id === key),
  );

  return (
    <div
      style={{
        padding: '10px',
        background: 'black',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      }}
    >
      <div
        style={{
          marginBottom: '8px',
          fontWeight: 'bold',
          textAlign: 'left',
        }}
      >{`${index} Insight`}</div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        {orderedData.map(({ id, value, color }) => (
          <React.Fragment key={id}>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: color,
              }}
            ></div>
            <div>
              <strong>{id}</strong>: {getValueLabel(value)}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const CreditRadarChart: React.FC = () => (
  <div
    style={{
      height: 500,
      minWidth: 0,
    }}
  >
    <ResponsiveRadar
      sliceTooltip={CustomSliceTooltip}
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
        tooltip: {
          wrapper: {},
          container: {
            background: '#f6f5f4',
            color: '#000000',
            fontSize: 17,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
      maxValue={150}
      data={data as unknown as Record<string, unknown>[]}
      keys={['Credit Bureau', 'Account Aggregation', 'KlearLink']}
      indexBy="insight"
      margin={{ top: 80, right: 150, bottom: 0, left: 150 }}
      borderColor={{ from: 'color' }}
      gridLabelOffset={20}
      isInteractive={true}
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
