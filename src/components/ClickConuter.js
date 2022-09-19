import React, { useCallback, useState } from "react";
import "./App.css";

function ClickConuter(props) {
  let [count, setConut] = useState();
  let [countId, setCountId] = useState();
  function start() {
    setCountId(
      (countId = setInterval(() => {
        setConut(function (conut) {
          return count++;
        });
      }, 100))
    );
  }

  function stop() {
    clearInterval(countId);
  }
  function reset() {
    setConut((count = 0));
  }

  return (
    <>
      <div className="container">
        <hr />
        <h2 className="font">{props.title}</h2>
        <div className="font">count : {count}</div>
        <div className="font">타이머의 ID : {countId}</div>
        <button onClick={start} className="myButton">
          시작
        </button>

        <button onClick={stop} className="myButton">
          종료
        </button>
        <hr></hr>
        <div>
          <button onClick={reset} className="myButton">
            리셋
          </button>
        </div>
        <hr />
      </div>
    </>
  );
}
export default ClickConuter;
