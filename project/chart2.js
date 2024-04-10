import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const data = [
  {
    name: 'Sugar Baby',
    population: 60,
    color: '#c0c0c0', // grey
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Crimson',
    population: 40,
    color: '#6aa84f', // green
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },

];

const chartConfig = {
  backgroundColor: 'transparent',
  backgroundGradientFrom: '#eff3ff',
  backgroundGradientTo: '#efefef',
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const PieGraph = () => {
  return (
    <View>
      <PieChart
        data={data}
        width={300}
        height={220}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
      />
    </View>
  );
};

export default VarietyGraph;