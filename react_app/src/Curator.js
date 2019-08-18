import React from 'react';
import FilterOption from './components/FilterOption';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import Picture from './components/Picture';
import DropZone from './components/DropZone';

import './style.css';

import axios from 'axios';

class Curator extends React.Component {
    _isMounted = false;

    state = {
        portraits: false,
        landscapes: false,
        architecture: false,
        still_life: false,
        images: []
    }

    componentDidMount() {
        this._isMounted = true;

        axios.get("/gallery")
            .then( (res) => {
                if (res && this._isMounted) {
                    this.setState( () => ({
                        images: res.data            
                    }) );
                } else {
                    console.log("Res was null or undef: " + JSON.stringify(res) );
                }
            })
            .catch( (err) => {
                console.log("There was an error2 " + err);
            })

    }


    updateFilter = (this_label) => {
        console.log("Updating Filter");

        this.setState({
           [this_label]: !this.state[this_label]
        });
    }

    render() {
        console.log(this.state.images);
        if (this._isMounted && this.state.images) {
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

                        <div className="container">

                            <form method="post" action="#" id="#">
                                <div className="form-group files color">
                                    <input type="file" className="form-control" multiple="" />
                                </div>
                            </form>

                        </div>

                        <DropZone />
         
                        <Picture 
                            label = {this.state.images[0].label}
                            img_name = {this.state.images[0].name}
                            alt = {this.state.images[0].name}
                            className = "first-image"
                        />

                    </div>
                </div>
            );
        } else {
            return(
                <div className="loading">
                    Loading...
                </div>
            )
        }
        
    } 
}

export default Curator;
