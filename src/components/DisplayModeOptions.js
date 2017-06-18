import React from 'react';
import PropTypes from 'prop-types';

require('./book.css');

const DisplayModeOptions = ({ setListing, setThumbnail, displayMode }) => {
  const switchToListing = function (event) {
    setListing();
  };

  const switchToThumbnail = function (event) {
    setThumbnail();
  };

  const styles = {
    radio: {
      marginLeft: '10px',
      cursor: 'pointer'
    },
    radiospan: {
      marginLeft: '20px',
      fontFamily: 'tahoma',
      fontSize: '16px'
    }
  };

  return (
    <span>
      <span style={styles.radiospan}>Thumbnail</span>
      <input type="radio"
        name="display"
        style={styles.radio}
        onChange={switchToThumbnail}
        checked={displayMode === 'THUMBNAIL'}
        value="thumbnail" />

      <span style={styles.radiospan}>List</span>
      <input type="radio"
        name="display"
        style={styles.radio}
        onChange={switchToListing}
        checked={displayMode !== 'THUMBNAIL'}
        value="list" />
    </span>
  );
};

DisplayModeOptions.propTypes = {
  setListing: PropTypes.func.isRequired,
  setThumbnail: PropTypes.func.isRequired,
  displayMode: PropTypes.string.isRequired
};

export default DisplayModeOptions;