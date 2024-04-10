import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import TableExample from './datatable';
import RipenessGraph from './chart';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Watermelon Ripeness Result</Text>
      </View>
      <View style={styles.graph}>
      <TableExample/>
      <RipenessGraph/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccffeb',

  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    marginLeft: 20
  },
  graph: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default App;