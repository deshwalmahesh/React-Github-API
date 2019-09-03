import React from 'react';
import './Card.css';
import Axios from 'axios'

class Card extends React.Component {
    render() {
        const profileData = this.props;
        return (
            <div className="github-profile">
                <img src={profileData.avatar_url} alt={"None"} />
                <div className="info">
                    <div className="name">{profileData.name}</div>
                    <div className="company">{profileData.public_repos} Public Repos</div>
                    <div className="company">Working @{profileData.company}</div>
                </div>
            </div>
        );
    }
}


class Form extends React.Component{

    state= {userName:''}

    handleSubmit = async(event) => {
        event.preventDefault();
        const resp = await Axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data)
        this.setState({userName:''})
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type={'text'}
                       value={this.state.userName}
                       onChange={(event)=> this.setState({userName: event.target.value})}
                       placeholder={'Enter User Name'}/>
                <button>ADD</button>
            </form>
        )
    };
}


export {
    Form,Card
}  //Exporting without default