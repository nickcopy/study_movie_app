import React from "react";
//스테이타는 동적데이터를 다룰때사용하는 리엑트 요소
// function App() {
//   return (
//     <div>

//     </div>
//   );
// }
// class App extends React.Component {
//   render() {
//     return <div>클래스 컴포넌트</div>;
//   }
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 465,
    };
  }
  증가함수 = () => {
    console.log("증가함수 호출됨");
    this.setState(function (현제state) {
      return {
        count: 현제state.count + 100,
      };
    });
    // this.setState({ count: this.state.count + 1 });
  };
  감소함수 = () => {
    console.log("감소함수 호출됨");
    this.setState(function (현제state) {
      return {
        count: 현제state.count - 200,
      };
    });
    // this.setState({
    //   count: this.state.count - 1,
    // });
  };

  render() {
    return (
      <div>
        <h1>카운터 : {this.state.count}</h1>
        <button onClick={this.증가함수}>+1</button>{" "}
        <button onClick={this.감소함수}>-1</button>
      </div>
    );
  }
}
export default App;
