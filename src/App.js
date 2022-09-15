import React from "react";
import Food from "./Food";

const fav = ["김치", "볶음", "파전"];
function App() {
  return (
    <React.Fragment>
      <h1 id="one">좋아하는 음식목록</h1>
      <ui>
        {fav.map((ele) => {
          return <Food fav={ele} />;
        })}
      </ui>
    </React.Fragment>
  );
}

export default App;
