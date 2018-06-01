import React from 'react';

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  // componentWillMount() {
  //   this.state.val += 1;
  // }
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log("(1)",this.state.val);    // 第 1 次 log


    this.setState({val: this.state.val + 1});
    console.log("(2)",this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log("(3)",this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log("(4)",this.state.val);  // 第 4 次 log
    }, 0);
  }

  render() {
    return <div>这是测试</div>;
  }
};


export default Example;
