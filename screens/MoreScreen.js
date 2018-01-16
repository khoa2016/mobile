import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { STATUS_BAR_HEIGHT } from '../constants';

export default class MoreScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>More Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    marginTop: STATUS_BAR_HEIGHT,
  }
});
