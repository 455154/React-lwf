import React from "react";
import ReactDOM from "react-dom";
// const title = <h1>JSX</h1>
// ReactDOM.render(title,document.getElementById('root'))

// function Hello() {
//   function edit() {
//     alert("ok");
//   }
//   return <div onClick={edit}>first组件</div>;
// }
// ReactDOM.render(<Hello />, document.getElementById("root"));
// ReactDOM.render(Hello(),document.getElementById('root'))
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.click = this.click.bind(this);
  }
  render() {
    return <div onClick={this.click}>{this.state.count}</div>;
  }
  click = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
}
ReactDOM.render(<Hello />, document.getElementById("root"));
