import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchColorsData } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchColorsData();
  }

  render() {
    console.log(this.props.colors);
    return (
      <h1>App</h1>
    );
  }
}

const mapStateToProps = ({ colors }) => {
  return {
    colors
  };
};

export default connect(mapStateToProps, { fetchColorsData })(App);
