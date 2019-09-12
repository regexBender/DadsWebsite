import React from 'react';
import FilterOption from './components/FilterOption';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import Picture from './components/Picture';

import './style.css';

import axios from 'axios';

class App extends React.Component {
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

    displayPictures(pictureArray) {
        let picturesWithPath = pictureArray.filter( (picture) => {
            return Boolean(picture.path);
        } )

        return picturesWithPath.map( (picture) => {
            let props = {
                id      : picture.id,
                img_name: picture.name,
                label   : picture.label,
                path    : picture.path
            }

            return <Picture key = {picture.id} {...props} className="gallery-image"/>;
        })
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

                        <Picture 
                            label = {this.state.images[0].label}
                            img_name = {this.state.images[0].name}
                            className = "first-image"
                        />

                        {this.displayPictures(this.state.images)}

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

export default App;
