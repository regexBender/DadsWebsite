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
        pageWrapId = {"page-wrap"}
        outerContainerId = {"outer-container"}
        >

      <div className="menu-item header">
        Carl Landow<br />
        Artist
      </div>
      <a className="menu-item SideText" href="/gallery">
        Gallery
      </a>

      <a className="menu-item SideText" href="/about">
        About the Artist
      </a>

      <a className="menu-item SideText" href="/curator-mode">
        Curator Mode
      </a>
    </Menu>


  );
};
