// React Controlled Component https://ru.reactjs.org/docs/forms.html#controlled-components

import React from "react";

class SearchBar extends React.Component {
    state = {term: ''};

    onInputChange = (event) => {
        // console.log(event.target);
        this.setState({term: event.target.value.toUpperCase()})
    };

    onInputSubmit = (event) => {
        event.preventDefault();
        console.log(`onInputSubmit() callback ... Submitted with value: ${this.state.term}`);
        this.props.onFormSubmit(this.state.term)
    };


    render() {
        console.log(this.state);

        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onInputSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"
                               value={this.state.term}
                               onChange={this.onInputChange}/>
                    </div>
                </form>

            </div>
        )
    }
}

export default SearchBar