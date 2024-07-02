import React from "react";

export class ClassComponent extends React.Component {
  constructor() {
    console.log('contructor');
    super();
    this.state = {
      count: 0,
    };
  }

  incCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    
    return true;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");

    return (
      <div>
        <button onClick={this.incCount}>Inc</button>
        <p>ClassComponent, count: {this.state.count}</p>
      </div>
    );
  }
}