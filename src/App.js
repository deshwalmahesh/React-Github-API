import React from 'react';
import './App.css';
import CardList from "./CardList";
import {Form} from "./Card";


class App extends React.Component {
  constructor(...props){
    super(...props)
    this.state={
      profiles: []  //It has to be an empty array in the start
    }
  }
    addNewProfile = (profileData)=> {
        this.setState(prevState =>({
            profiles: [...prevState.profiles, profileData],
        }));
    };

  render() {
    return (
        <div>
          <h1 className="header">{this.props.title}</h1>
          <Form onSubmit={this.addNewProfile}/>
          <CardList profiles={this.state.profiles}/>
        </div>
    );
  }
}

export default App;
