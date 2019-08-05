import React from 'react';


class FilterOption extends React.Component {
    state = {
        selectedState: this.props.selected
    }

    handleClick = (event) => {
         this.setState({
                selectedState: !this.state.selectedState
        },  
            this.props.updateFilter()
         );

         
    }

    getClass() {
        let className = this.state.selectedState ? "option-selected" : "option-not-selected";
        return className;
    }

    render () {
        return (
            <div onClick={ this.handleClick }
                className={ `option ${ this.getClass() }` }
                id={`filter-${ this.props.label }`} >
                { this.props.label }
            </div>
        )
    }
}

export default FilterOption;
