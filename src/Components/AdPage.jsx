import React, { Component } from "react";
import Ad from "./Ad";
import styled from "styled-components";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid black;
  border-radius: 15px;
  width: 100px;
  height: 30px;
  margin: 5px;
  font-weight: 600;
`;

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
        <Button onClick={this.handleToggleClick}>
          {this.state.showAd ? "광고 숨기기" : "광고 보기"}
        </Button>
      </div>
    );
  }
}

export default AdPage;
