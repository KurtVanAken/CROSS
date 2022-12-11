import React, { Component, Fragment } from "react";
import './styles.css'

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      items:[],
      DataisLoaded: false
    };
  }
  componentDidMount() {
    fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
      .then(res => res.json())
      .then(data => {
        this.setState({items: data,
          DataisLoaded: true});
      });
    
  }

  onChange = e => {
    const suggestions  = [];
    this.state.items.data.map((item) => (
        suggestions.push(item.name)
    ))
   
    
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });

    this.onTrigger(userInput)
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
    this.onTrigger(e.currentTarget.innerText)
  };
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };
  onTrigger = (childValue) => {

    this.props.parentCallback(childValue);

}
  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;
    
   

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
          suggestionsListComponent = (
            <ul className="suggestions">
              {filteredSuggestions.map((suggestion, index) => {
                let className;
  
                // Flag the active suggestion with a class
                if (index === activeSuggestion) {
                  className = "suggestion-active";
                }
                const { DataisLoaded, items } = this.state;
                if (!DataisLoaded) return <div>
                <h1> 👹 Please wait some time.... </h1> </div> ;
                return (
              
                        <li className={className} key={suggestion} onClick={onClick}
                        >
                    {suggestion}
             </li>
                      
                  
                );
              })}
            </ul>
          );
        } else {
          suggestionsListComponent = (
            <div className="no-suggestions">
              <em>No suggestions available.</em>
            </div>
          );
        }
      }
      return (
        <Fragment>
          <input
          id='autoCompleteIntput'
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput} 
  
          />
          {suggestionsListComponent}
        </Fragment>
      );
    }
  }

  export default Autocomplete;
