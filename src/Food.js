import React from "react";
function Food(props) {
  return (
    <li>
      <span>나는 {props.fav}을 좋아합니다</span>
    </li>
  );
}
export default Food;
