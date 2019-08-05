import React from 'react';
import { push as Menu } from 'react-burger-menu';
import '../style.css';

export default props => {
  return (

    <Menu
        isOpen = {true}
        disableOverlayClick
        disableAutoFocus
        noOverlay
        pageWrapId = {"pageWrap"}
        outerContainerId = {"outerContainer"}
        >

      <div className="menu-item header">
        Carl Landow<br />
        Artist
      </div>
      <a className="menu-item SideText" href="/">
        Gallery
      </a>

      <a className="menu-item SideText" href="/">
        About the Artist
      </a>

      <a className="menu-item SideText" href="/">
        Curator Mode
      </a>
    </Menu>


  );
};
