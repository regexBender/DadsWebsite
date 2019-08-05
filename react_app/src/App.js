import React from 'react';
import FilterOption from './components/FilterOption';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import './style.css';

class App extends React.Component {

    updateFilter() {
        console.log("Updating Filter")
    }

    render() {
        return (
            <div className = "App" id = "outer-container">

                <SideBar />

                <div className = "flex-container" id = "page-wrap">
                    
                    <SearchBar />
                    
                    <div className = "filter-container">
                        <FilterOption 
                            label = "All" 
                            selected = {true}
                            updateFilter = {this.updateFilter}/>

                        <FilterOption 
                            label = "Portraits" 
                            selected = {true}
                            updateFilter = {this.updateFilter}/>

                        <FilterOption 
                            label = "Landscapes" 
                            selected = {true}
                            updateFilter = {this.updateFilter}/>

                        <FilterOption 
                            label = "Architecture" 
                            selected = {true}
                            updateFilter = {this.updateFilter}/>
                        <FilterOption 
                            label = "Still Life" 
                            selected = {true}
                            updateFilter = {this.updateFilter}/>
                    </div>
                </div>
            </div>
        );
    } 
}

export default App;
