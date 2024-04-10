import React from 'react';
import { View, ScrollView} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const data = [
  ['Count', 'Variety            ', 'Ripeness             ', 'Date', 'Time'],
  ['1', 'Sugar Baby', 'Unripe', 'Mar 9, 2024', '03:28'],
  ['2', 'Sugar Baby', 'Unripe', 'Mar 9, 2024', '03:31'],
  ['3', 'Crimson', 'Ripe', 'Mar 9, 2024', '03:37'],
  ['4', 'Crimson', 'Overripe', 'Mar 9, 2024', '03:40'],
  ['5', 'Sugar Baby', 'Ripe', 'Mar 9, 2024', '03:45'],
  ['6', 'Crimson', 'Unripe', 'Mar 9, 2024', '04:13'],
  ['7', 'Crimson', 'Overripe', 'Mar 9, 2024', '04:16'],
  ['8', 'Sugar Baby', 'Ripe', 'Mar 9, 2024', '04:17'],
];

const TableExample = () => {
  return (
    <View>
    <ScrollView>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#00b36b' }}>
        <Row
          data={data[0]}
          style={{ height: 50, backgroundColor: '#00ff99' }}
          textStyle={{ margin: 50 }}
        />
        <Rows data={data.slice(1)} textStyle={{ margin: 10 }} />
      </Table>
    </ScrollView>
    </View>
  );
};

export default TableExample;