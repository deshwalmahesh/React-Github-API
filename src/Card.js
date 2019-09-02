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

    state= {userName:''}

    handleSubmit=(event) => {
        event.preventDefault();
        console.log(this.state.userName)
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type={'text'}
                       value={this.state.userName}
                       onChange={(event)=> this.setState({userName: event.target.value})}
                       placeholder={'Enter User Name'}/>
                <button>Submit</button>
            </form>
        )
    };
}


export {
    Form,Card
}  //Exporting without default