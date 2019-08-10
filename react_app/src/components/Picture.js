import React from 'react';


class Picture extends React.Component {

    state = {
        
    }

    render () {
        // Use the first label as the path if there is more than one label
        let label = this.props.label.split(/\s*,\s*/)[0];
 
        let path = `/images/${label}/${this.props.img_name}.jpg`;

        return (
            <div id={this.props.img_name} >
                <img 
                    className = {this.props.className} 
                    src={path}/>
            </div>
        )
    }
}

export default Picture;
