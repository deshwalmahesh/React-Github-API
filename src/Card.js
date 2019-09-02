import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} alt={"None"} />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}


class Form extends React.Component{
    /* constructor(...props){
         super(...props)
         this.state={
             userInput: ''
         }
     } */

    userInput=React.createRef();
    handleSubmit=(event) => {
        event.preventDefault();
        console.log(this.userInput.current.value)
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit} ref={this.userInput} action=''>
                <input type={'text'} placeholder={'Enter User Name'}/>
                <button>Submit</button>
            </form>
        )
    };
}


export {
    Form,Card
}  //Exporting without default