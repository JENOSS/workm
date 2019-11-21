//user.js
import React from 'react'

class User extends React.Component {
    render(){
        return(
            <div>
                <UserProfile 
                    userid={this.props.userid}
                    image={this.props.image}
                    name={this.props.name}
                />
                <Userinfo
                    id={this.props.id}
                    password={this.props.password}
                    email={this.props.email}
                    auth={this.props.auth}
                    privatekey={this.props.privatekey}
                />
            </div>
        )
    }
}


class UserProfile extends React.Component {
    render(){
        return(
            <div>
                <img src={this.props.image} alt='profile'/>
                <h2>{this.props.name}({this.props.userid})</h2>
            </div>
        )
    }
}


class Userinfo extends React.Component {
    render(){
        return(
            <div>
                <p>{this.props.id}</p>
                <p>{this.props.password}</p>
                <p>{this.props.email}</p>
                <p>{this.props.auth}</p>
                <p>{this.props.privatekey}</p>
            </div>
        )
    }
}

export default User;