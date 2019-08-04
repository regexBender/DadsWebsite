import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../style.css';

export default props => {
  return (
    <Menu isOpen = {true}>
      <div className="header">
        Carl Landow<br />
        Artist
      </div>
      <a className="menu-item" href="/">
        Gallery
      </a>

      <a className="menu-item" href="/vue">
        About the Artist
      </a>

      <a className="menu-item" href="/node">
        Curator Mode
      </a>
    </Menu>
  );
};
