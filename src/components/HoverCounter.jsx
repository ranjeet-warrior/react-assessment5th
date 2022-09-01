import React, { Component } from "react";
import UpdatedComp from "./HigherOrder";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <h1 className="hovered" onMouseOver={incrementCount}>hovered {count} times</h1>;
  }
}
export default UpdatedComp(HoverCounter);