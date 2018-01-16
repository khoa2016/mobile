import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';

import { Button, Card, Text } from 'react-native-elements';

import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';

const NewListings = (props) => {

  renderHomeDetails = (item, index) => (
    <View key={index}>
      <Card
        containerStyle={styles.cardStyle}
        imageStyleXX={styles.image}
        imageXX={{uri: `https://unsplash.it/100/100?image=${index}`}}
      >
        <TouchableOpacity onPress={() => props.onSelectHome(item.id)}>
          <Image
            style={styles.image}
            source={{uri: `https://unsplash.it/100/100?image=${index}`}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.onSelectFavorite(item.id)}>
          <Icon name="favorite-border" size={35} iconStyle={{position: 'absolute', zIndex: 2, color: 'white', top: -150, right: 10}} />
        </TouchableOpacity>
        <Text>${item.cost}</Text>
        <Text>Line 2</Text>
        <Text>Line 3</Text>
        <Text>Line 4</Text>
      </Card>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text h5>New Listings</Text>
      </View>

      <ScrollView horizontal={true}>
        {props.data.map(this.renderHomeDetails)}
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: SCREEN_WIDTH,
    // alignItems: 'center',
    backgroundColor: '#ccc',
  },
  // details: {
  //   // flex: 1,
  //   width: SCREEN_WIDTH,
  //   aspectRatio: 1,
  //   backgroundColor: 'rgba(0,0,0,0.02)',
  // },
  cardStyle: {
    height: 250,
  },
  image: {
    width: 250,
    height: 150,
  },
  // item: {
  //   flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     alignItems: 'center',
  //     padding: 30,
  //     margin: 2,
  //     borderColor: '#2a4944',
  //     borderWidth: 1,
  //     backgroundColor: '#d2f7f1'
  // },
})

export default NewListings;
