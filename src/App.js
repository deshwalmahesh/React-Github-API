import React from 'react';
import './App.css';
import CardList from "./CardList";


class App extends React.Component {
	render() {
  	return (
    	<div>
    	  <h1 className="header">{this.props.title}</h1>
        <CardList />
    	</div>
    );
  }
}

export default App;
