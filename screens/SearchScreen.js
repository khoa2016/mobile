import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

import { STATUS_BAR_HEIGHT } from '../constants';

const Images = [
  { uri: "https://i.imgur.com/sNam9iJ.jpg" },
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" }
];

export default class SearchScreen extends React.Component {

  state = {
    markers: [
      {
        coordinate: {
          latitude: 45.524548,
          longitude: -122.6749817,
        },
        title: "Best Place",
        description: "This is the best place in Portland",
        image: Images[0],
      },
      {
        coordinate: {
          latitude: 45.524698,
          longitude: -122.6655507,
        },
        title: "Second Best Place",
        description: "This is the second best place in Portland",
        image: Images[1],
      },
      {
        coordinate: {
          latitude: 45.5230786,
          longitude: -122.6701034,
        },
        title: "Third Best Place",
        description: "This is the third best place in Portland",
        image: Images[2],
      },
      {
        coordinate: {
          latitude: 45.521016,
          longitude: -122.6561917,
        },
        title: "Fourth Best Place",
        description: "This is the fourth best place in Portland",
        image: Images[3],
      },
    ],
    region: {
      // latitude: 45.52220671242907,
      // longitude: -122.6653281029795,
      // latitudeDelta: 0.04864195044303443,
      // longitudeDelta: 0.040142817690068,
      latitude: 39.749632,
      longitude: -105.000363,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0201,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
          <MapView
            ref={map => this.map = map}
            initialRegion={this.state.region}
            style={styles.map}
          >
            <MapView.Marker
              coordinate={{longitude:-105.000363, latitude:39.749632}}
              title={"title"}
              description={"description"}
            />
          </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    marginTop: STATUS_BAR_HEIGHT,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
