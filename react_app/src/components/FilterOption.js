import React from 'react';


class FilterOption extends React.Component {

    state = {
        selectedState: this.props.selected
    }

    handleClick = (event) => {
         this.setState({
                selectedState: !this.state.selectedState
        },  
            this.props.updateFilter(this.props.label)
         );

         
    }

    getClass() {
        let className = this.state.selectedState ? "option-selected" : "option-not-selected";
        return className;
    }

    render () {
        let display_name = this.props.label.replace("_", " ");

        return (
            <div onClick={ this.handleClick }
                className={ `option ${ this.getClass() }` }
                id={`filter-${ this.props.label }`} >
                { display_name }
            </div>
        )
    }
}

export default FilterOption;
