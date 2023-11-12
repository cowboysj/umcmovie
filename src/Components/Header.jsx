import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginControl from "./LoginControl";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerWrap">
        <div className="headerLeft">
          <Link style={{ display: "flex", alignItems: "center" }} to="/">
            <img
              style={{
                width: "154px",
                height: "20px",
              }}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="로고"
            />
          </Link>

          <ul>
            <li>
              <Link className="headerButton" to="/movie">
                영화
              </Link>
            </li>
            <li>
              <Link className="headerButton" to="/tv">
                TV 프로그램
              </Link>
            </li>
            <li>
              <Link className="headerButton" to="/person">
                인물
              </Link>
            </li>
            <div className="loginWrap">
              <LoginControl />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
