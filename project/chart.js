import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const data = [
  {
    name: 'Unripe',
    population: 37,
    color: '#33ffad', // grey
    legendFontColor: '#7F7F7F',
    legendFontSize: 20,
  },
  {
    name: 'Ripe',
    population: 37,
    color: '#00b36b', // green
    legendFontColor: '#7F7F7F',
    legendFontSize: 20,
  },
  {
    name: 'Overripe',
    population: 26,
    color: '#004d2e', // red
    legendFontColor: '#7F7F7F',
    legendFontSize: 20,
  },
];

const chartConfig = {
  backgroundColor: 'transparent',
  backgroundGradientFrom: '#eff3ff',
  backgroundGradientTo: '#efefef',
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const PieGraph = () => {
  return (
    <View>
      <PieChart
        data={data}
        width={500}
        height={420}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'45'}
      />
    </View>
  );
};

export default PieGraph;