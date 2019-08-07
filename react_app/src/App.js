import React from 'react';
import FilterOption from './components/FilterOption';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import './style.css';

class App extends React.Component {

    state = {
        portraits: false,
        landscapes: false,
        architecture: false,
        still_life: false
    }

    updateFilter = (this_label) => {
        console.log("Updating Filter");

        this.setState({
           [this_label]: !this.state[this_label]
        });
    }

    render() {
        return (
            <div className = "App" id = "outer-container">

                <SideBar />

                <div className = "flex-container" id = "page-wrap">
                    
                    <SearchBar />
                    
                    <div className = "filter-container">

                        <FilterOption 
                            label = "portraits" 
                            selected = {this.state.portraits}
                            updateFilter = {this.updateFilter}/>

                        <FilterOption 
                            label = "landscapes" 
                            selected = {this.state.portraits}
                            updateFilter = {this.updateFilter}/>

                        <FilterOption 
                            label = "architecture" 
                            selected = {this.state.portraits}
                            updateFilter = {this.updateFilter}/>
                            
                        <FilterOption 
                            label = "still_life" 
                            selected = {this.state.portraits}
                            updateFilter = {this.updateFilter}/>
                    </div>
                </div>
            </div>
        );
    } 
}

export default App;
