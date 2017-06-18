import React from 'react';
import PropTypes from 'prop-types';

class TopicSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    function putCursorAtEnd(input) {
      const value = input.value;
      input.value = '';
      input.value = value;
    }

    let input = this.refs.input;

    input.focus();
    putCursorAtEnd(input);
  }

  handleChange(event) {
    this.props.setTopic(event.target.value);
  }

  handleKeyPress(event) {
    if (event.key == 'Enter') {
      this.props.setTopic(event.target.value);
    }
  }

  render() {
    const styles = {
      topic: {
        marginRight: '10px',
        fontFamily: 'tahoma',
        fontSize: '18px'
      },
      input: {
        fontFamily: 'tahoma',
        fontSize: '16px',
        marginRight: '10px'
      }
    };

    const topic = this.props.topic;

    return (
      <span>
        <span style={styles.topic}>
          Topic
        </span>

        <input type="text"
          ref="input"
          style={styles.input}
          value={topic}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress} />
      </span>
    );
  }
}

TopicSelector.propTypes = {
  topic: PropTypes.string.isRequired,
  setTopic: PropTypes.func.isRequired
};

export default TopicSelector;