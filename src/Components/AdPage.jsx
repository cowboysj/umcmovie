import React, { Component } from "react";
import Ad from "./Ad";

class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAd: true,
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd,
    }));
  };

  render() {
    return (
      <div>
        <Ad showAd={this.state.showAd} />
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? "광고 숨기기" : "광고 보기"}
        </button>
      </div>
    );
  }
}

export default AdPage;
