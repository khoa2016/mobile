import { Dimensions } from 'react-native';
import { Constants } from 'expo';

export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const FETCHING_NEW_LISTINGS = 'FETCHING_NEW_LISTINGS';
export const FETCHING_NEW_LISTINGS_SUCCESS = 'FETCHING_NEW_LISTINGS_SUCCESS';
export const FETCHING_NEW_LISTINGS_FAILURE = 'FETCHING_NEW_LISTINGS_FAILURE';
