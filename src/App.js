import React, { Component } from 'react';
import { getResult } from './services/requests';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultData: [],
      requestStatus: ""
    }
  }

  onResponse = (response) => {
    const resultData = response.data?.collection?.items;
    this.setState({ 
      resultData,
      requestStatus: resultData.length == 0 ? "Empty result" : ""
    });
  }

  onCatch = (error) => {
    this.setState({
      requestStatus: "Error fetching data ..."
    })
  }

  onSearch = (e) => {
    const searchTerm = document.getElementsByClassName("searchTermInput")[0].value;
    
    if (searchTerm.trim() !== "") {
      getResult(
        searchTerm, 
        this.onResponse, 
        this.onCatch
      );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input 
            type="text" 
            className="searchTermInput"
            placeholder="Input here."/>
          <button onClick={this.onSearch}>
            Search
          </button>
        </header>
        { 
          this.state.resultData.length == 0 && this.state.requestStatus != "" ? 
          <div>
            {this.state.requestStatus}
          </div>
          :
          <div>
            {this.state.resultData.map((item, index) => (
              <div key={`items-index-${index}`}>
                <img src={item?.links && item?.links[0].href} style={{width: "100px", height: "100px"}}/>
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
}

export default App;
