import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          Clicked {this.props.count} times
          {this.props.name}
          {/* burada name withCounter component den geliyor.--yoksa App.js den dogrudan degil */}
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter, 5);
