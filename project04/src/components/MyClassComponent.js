import React, { Component } from "react";

export default class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      count: 0,
      ts: new Date(),
      location: "cons",
      color: this.props.color,
    };

    this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
  }

  handleButtonOnClick = () => {
    // this.setState((prev)=>{
    //     return {
    //         ...prev,
    //         count:prev.count+1
    //     }
    // },()=>{
    //     console.log("================State update completed...")
    // });

    this.setState((prev) => {
      return {
        ...prev,
        count: prev.count + 1,
      };
    });

    console.log(this.state);
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("UNSAFE_componentWillReceiveProps===");
    console.log(nextProps);
    if (nextProps.color == "yellow") {
      this.setState((prev) => {
        return {
          ...prev,
          color: "blue",
        };
      });
    } else {
      this.setState((prev) => {
        return {
          ...prev,
          color: this.props.color,
        };
      });
    }
  }

  componentWillMount() {
    this.setState((prev) => {
      return {
        ...prev,
        count: prev.count + 1,
        location: "componentWillMount",
      };
    });
    console.log("==========Component Will Mount Completed...");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("======shouldComponentUpdate");

    if (this.state.count == nextState.count) {
      return false;
    } else return true;

    if (this.props.color == nextProps.color) {
      return false;
    } else {
      return true;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = "title".concat(new Date());
    document.getElementById("test123").innerHTML = "Some data";
    if (this.props.input == prevProps.input) {
      // make ajax calls
      // Perform any other function
    }
  }

  render() {
    console.log("==========Render Method Started...");
    return (
      <div>
        <h1>My Class Component</h1>
        <h2>The data 1 is ....{this.state.color}</h2>
        <h2>The data 1 is ....{this.state.name}</h2>
        <h2>The data 1 is ....{this.state.age}</h2>
        <h2>The data 1 is ....{this.state.count}</h2>
        <h2>The data 1 is ....{this.state.ts.toString()}</h2>
        <h2>The data 1 is ....{this.state.location}</h2>
        <button onClick={this.handleButtonOnClick}>Update</button>
      </div>
    );
  }
}
