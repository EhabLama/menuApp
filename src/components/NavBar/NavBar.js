import React from "react";

import "./NavBar.css";

const NavBar = props => {
  return (
    <nav id="nav">
      <ul>
        <li>
          <a onClick={props.triggerPages}>Menu 1</a>
        </li>
        <li>
          <a onClick={props.triggerVariables}>Menu 2</a>
        </li>
        <li>
          <a onClick={props.triggerSections}>Menu 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
