import React from 'react';

export default class IntroductionView extends React.Component {
  render() {
    return (
      <h1>Hi, my name is {this.props.name}</h1>
    );
  }
}