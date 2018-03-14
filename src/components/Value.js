import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Value extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
const propTypes = {
  number: PropTypes.number
}
const defaultProps = {
  number: -1
}
Value.propTypes = propTypes;
Value.defaultProps = defaultProps;
