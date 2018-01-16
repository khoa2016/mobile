import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { STATUS_BAR_HEIGHT } from '../constants';

export default class AlertsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Alerts Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    marginTop: STATUS_BAR_HEIGHT,
  }
});
