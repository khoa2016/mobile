import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from 'react-native-elements';

const CompanyTitle = () => (
  <View style={styles.container}>
    <Text h4>Realtaasa</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightblue',
    // size: 18,
  }
});

export default CompanyTitle;
