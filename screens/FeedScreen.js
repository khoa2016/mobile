import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchNewListings } from '../actions';

import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';
import CompanyTitle from '../components/CompanyTitle';
import NewListings from '../components/NewListings';

class FeedScreen extends React.Component {

  state = {
    selectedHomeDetails: null,
  };

  componentWillMount() {
    this.props.fetchNewListings();
  }

  saveHomeAsFavorite = (id) => {
    console.debug(`In FeedScreen: saveHomeAsFavorite(): selected image id (${id})`);
  }

  selectHome = (id) => {
    console.debug(`In FeedScreen: selectHome(): selected home ID (${id})`);
    const selectedHomeDetails = this.props.newListingsData.filter((item) => item.id === id);
    console.debug(`In FeedScreen: selectHome(): selected home details = `);
    console.debug(selectedHomeDetails);
    this.setState({selectedHomeDetails});
  };

  renderNewListings() {
    return (
      <View style={styles.container}>
        <View style={styles.companyTitle}>
          <CompanyTitle />
        </View>
        <View style={styles.newListings}>
          <NewListings
            data={this.props.newListingsData}
            onSelectHome={this.selectHome}
            onSelectFavorite={this.saveHomeAsFavorite}
          />
        </View>
      </View>
    );
  }

  closeDetails = () => {
    console.debug(`In FeedScreen: closeDetails(): entering ...`);
    this.setState({selectedHomeDetails: null});
  }

  renderHomeDetails(details) {
    return (
      <View style={styles.detailsContainer}>
        <TouchableOpacity onPress={() => this.closeDetails()}>
          <Icon name="close" size={50} iconStyle={{position: 'absolute', zIndex: 2, color: 'black', top: STATUS_BAR_HEIGHT, left: -190}} />
        </TouchableOpacity>
        <Text>selected home: {details[0].cost}</Text>
      </View>
    );
  }

  render() {
    const { selectedHomeDetails } = this.state;

    return (
      <View>
        {selectedHomeDetails && this.renderHomeDetails(selectedHomeDetails)}
        {!selectedHomeDetails && this.renderNewListings()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    marginTop: STATUS_BAR_HEIGHT,
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#ccc',
    marginTop: STATUS_BAR_HEIGHT,
    alignItems: 'center',
  },
  companyTitle: {
    width: SCREEN_WIDTH,
    height: 50,
    // paddingTop: 20,
  },
  newListings: {
    width: SCREEN_WIDTH,
    height: 300,
    borderWidth: 0.5,
    borderColor: 'green',
    // paddingVertical: 20,
    // marginBottom: 20,
  }
});

function mapStateToProps(state) {
  console.debug("In FeedScreen: mapStateToProps(): state = ");
  console.debug(state);
  return {
    newListingsData: state.newListings.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNewListings: () => dispatch(fetchNewListings())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedScreen)
