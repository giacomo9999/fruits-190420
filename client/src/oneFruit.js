import React, { Component } from "react";

class OneFruit extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h5>{this.props.color}</h5>
        <h5>{this.props.shape}</h5>
      </div>
    );
  }
}

export default OneFruit;
