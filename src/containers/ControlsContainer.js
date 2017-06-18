import { connect } from 'react-redux';

import Controls from '../components/Controls';

const mapStateToProps = (state) => {
  return {
    topic: state.topic,
    displayMode: state.displayMode
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Controls);