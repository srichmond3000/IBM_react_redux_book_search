import { connect } from 'react-redux';
import TopicSelector from '../components/TopicSelector';
import { setTopic } from '../../actions/actions';

const mapStateToProps = state => {
  return {
    topic: state.topic
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTopic: topic => {
      dispatch(setTopic(topic));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicSelector);