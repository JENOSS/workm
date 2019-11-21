import React from 'react'

class User extends React.Component {
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birth}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.auth}</p>
            </div>
        )
    }
}

export default User;