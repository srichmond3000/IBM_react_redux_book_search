import React from 'react';
import PropTypes from 'prop-types';

import DisplayModeContainer from '../containers/DisplayModeContainer';
import TopicSelectorContainer from '../containers/TopicSelectorContainer';

const Controls = ({ topic, displayMode }) => {
  const styles = {
    controls: {
      padding: '15px',
      marginBottom: '25px'
    }
  };

  return (
    <div style={styles.controls}>
      <TopicSelectorContainer topic={topic} />
      <DisplayModeContainer displayMode={displayMode} />
    </div>
  );
};

Controls.propTypes = {
  topic: PropTypes.string.isRequired,
  displayMode: PropTypes.string.isRequired
};

export default Controls;