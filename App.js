import React from 'react';
import { Provider } from 'react-redux';
import { TabNavigator } from 'react-navigation';

import { Icon } from 'react-native-elements';
import configureStore from './store';
import FeedScreen from './screens/FeedScreen';
import SearchScreen from './screens/SearchScreen';
import SavesScreen from './screens/SavesScreen';
import AlertsScreen from './screens/AlertsScreen';
import MoreScreen from './screens/MoreScreen';

import './ReactotronConfig';

const store = configureStore();

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      Explore: {
        screen: FeedScreen,
        navigationOptions: {
          tabBarLabel: 'Explore',
          tabBarIcon: ({tintColor}) => <Icon name="rss-feed" />
        }
      },
      Saved: {
        screen: SearchScreen,
        navigationOptions: {
          tabBarLabel: 'Saved',
          tabBarIcon: ({tintColor}) => <Icon name="search" size={20} color={tintColor} />
        }
      },
      Trips: {
        screen: SavesScreen,
        navigationOptions: {
          tabBarLabel: 'Trip',
          tabBarIcon: ({tintColor}) => <Icon name="favorite-border" size={20} color={tintColor} />
        }
      },
      Inbox: {
        screen: AlertsScreen,
        navigationOptions: {
          tabBarLabel: 'Inbox',
          tabBarIcon: ({tintColor}) => <Icon name="add-alert" size={20} color={tintColor} />
        }
      },
      Profile: {
        screen: MoreScreen,
        navigationOptions: {
          tabBarLabel: 'Profile',
          tabBarIcon: ({tintColor}) => <Icon name="more" size={20} color={tintColor} />
        }
      },
    }, {
      tabBarOptions: {
        labelStyle: {
          fontSize: 13
        }
      }
    });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}
