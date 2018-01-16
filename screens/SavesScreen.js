import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { STATUS_BAR_HEIGHT } from '../constants';

export default class SavesScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Saves Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    marginTop: STATUS_BAR_HEIGHT,
  }
});
