import React from 'react';
import SideBar from './components/SideBar';
import SearchBar from './components/SearchBar';
import './style.css';

function App() {
    return (
        <div className = "App" id = "outerContainer">
            <SideBar />
            <div id = "pageWrap">
                <SearchBar />
            </div>
        </div>
    );
}

export default App;
