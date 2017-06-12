import { combineReducers } from 'redux';

const defaults = {
  TOPIC: 'javascript',
  DISPLAY_MODE: 'THUMBNAIL'
};

const topicReducer = (state = defaults.TOPIC, action) => {
  switch (action.type) {
    case 'SET_TOPIC':
      return action.topic;

    default:
      return state;
  }
};

const displayModeReducer = (state = defaults.DISPLAY_MODE, action) => {
  switch (action.type) {
    case 'DISPLAY_MODE':
      return action.displayMode;

    default:
      return state;
  }
};

export default combineReducers({
  topic: topicReducer,
  displayMode: displayModeReducer
});