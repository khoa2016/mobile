import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';

import { Button, Card, Text } from 'react-native-elements';

import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';

class NewListings extends React.PureComponent {

  state = {
    page: 1
  };

  renderHomeDetails = ({item, index}) => (
    <View key={index}>
      <Card
        containerStyle={styles.cardStyle}
        imageStyleXX={styles.image}
        imageXX={{uri: `https://unsplash.it/100/100?image=${index}`}}
      >
        <TouchableOpacity onPress={() => onSelectHome(item.id)}>
          <Image
            style={styles.image}
            source={{uri: `https://unsplash.it/100/100?image=${index}`}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSelectFavorite(item.id)}>
          <Icon name="favorite-border" size={35} iconStyle={{position: 'absolute', zIndex: 2, color: 'white', top: -150, right: 10}} />
        </TouchableOpacity>
        <Text>ID: {item.id}</Text>
        <Text>${item.cost}</Text>
        <Text>Line 3</Text>
        <Text>Line 4</Text>
      </Card>
    </View>
  );

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1,
    }, () => {
      console.debug(`In components.newListings: handleLoadMore(): page num (${this.state.page}), loading more data ...`);
      this.props.onLoadMore(this.state.page);
    });
  };

  render() {
    const { data } = this.props;
    console.debug(`In components.NewListings: render(): # items (${data.length}), typeof (${typeof data}), data = `);
    console.debug(data);

    return (
      <View style={styles.container}>
        <View>
          <Text h5>New Listings</Text>
        </View>
  
        <FlatList
          horizontal
          data={data}
          renderItem={this.renderHomeDetails}
          keyExtractor={(item, index) => item.id}
          onEndReached={this.handleLoadMore}
          onEndThreshold={4}
        />
      </View>
    )
  }
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
