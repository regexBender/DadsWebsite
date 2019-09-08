import React from 'react';
import FilterOption from './components/FilterOption';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import Picture from './components/Picture';
import DropZone from './components/DropZone';

import './style.css';

import axios from 'axios';
const qs = require('qs');

const config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
};

class Curator extends React.Component {
    _isMounted = false;

    state = {
        portraits: false,
        landscapes: false,
        architecture: false,
        still_life: false,
        images: [],
        files: null
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


    handleSubmit = (img_name, label, file, event) => {
        event.preventDefault();
        console.log(img_name);
        console.log(label);
        console.log(file);


        const data = new FormData();
        data.append('file', file);
        data.append('filename', img_name);
        data.append('img_name', img_name);
        data.append('label', label);

        console.log(data);

        axios.post("http://localhost:3001/upload", data, config)
        . then( (res) => { // then print response status
            console.log(res) //statusText
         })
         .catch( (error) => {
             console.log(error)
         })
    }

    onDrop(acceptedFiles) {
        this.setState({
            files: acceptedFiles
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

                        <DropZone 
                            onDrop = {(files) => this.onDrop(files)} 
                            handleSubmit = {this.handleSubmit}>
                        </DropZone>
         
                        <Picture 
                            img_name = {this.state.images[0].name}
                            label = {this.state.images[0].label}
                            path = {this.state.images[0].path}
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
