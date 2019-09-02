import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        const profileData = this.props;
        return (
            <div className="github-profile">
                <img src={profileData.avatar_url} alt={"None"} />
                <div className="info">
                    <div className="name">{profileData.name}</div>
                    <div className="company">{profileData.company}</div>
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

    //state= {userName:''}

    userNameInput=React.createRef();
    handleSubmit=(event) => {
        event.preventDefault();
        console.log(this.userNameInput.current.value)
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type={'text'}
                       //value={this.state.userName}
                       placeholder={'Enter User Name'}
                       ref={this.userNameInput}/>
                <button>Submit</button>
            </form>
        )
    };
}


export {
    Form,Card
}  //Exporting without default