import React from "react";
import adimg from "../img/Untitled (1).png";

function Ad(props) {
  if (props.showAd) {
    return (
      <div>
        <img style={{ width: "100%" }} src={adimg} alt="광고 이미지" />
      </div>
    );
  } else {
    return null;
  }
}

export default Ad;
