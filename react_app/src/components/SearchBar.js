import React from 'react';


class SearchBar extends React.Component {

    state = {
        searchInputState: ''
    }

    handleTextInput = (event) => {
        this.setState({searchInputState: this.searchInput.value});
        console.log(this.state.searchInputState);
    }

    render () {
        return (
            <div className="add_item">
                <form>
                    <input
                        ref = {
                            searchInput => (this.searchInput = searchInput)
                        }
                        onChange={ this.handleTextInput }
                        className="input_text"
                        type="text"
                        id="searchbar"
                        name="searchbar"
                        value={this.state.textInput}
                        placeholder="Search for a picture"
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;
