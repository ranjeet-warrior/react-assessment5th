import React, { Component } from "react";

const UpdatedComp = (OriginalComp) => {
  class NewComp extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <OriginalComp
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComp;
};
export default UpdatedComp;