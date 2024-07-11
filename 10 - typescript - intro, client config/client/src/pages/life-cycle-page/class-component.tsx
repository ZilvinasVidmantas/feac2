import React from "react";

interface ClassComponentProps { }

interface ClassComponentState { 
  count: number;
}
export class ClassComponent extends React.Component<ClassComponentProps, ClassComponentState> {
  constructor(props = {}) {
    console.log('contructor');
    super(props);
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