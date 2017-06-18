import { connect } from 'react-redux';

import DisplayModeOptions from '../components/DisplayModeOptions';
import { setDisplayMode } from '../../actions/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    setListing: () => {
      dispatch(setDisplayMode('LISTING'));
    },
    setThumbnail: () => {
      dispatch(setDisplayMode('THUMBNAIL'));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayModeOptions);