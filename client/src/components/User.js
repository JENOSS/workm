//user.js
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class User extends React.Component {
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.num}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.userid}</TableCell>
                <TableCell>{this.props.password}</TableCell>
                <TableCell>{this.props.email}</TableCell>
                <TableCell>{this.props.auth}</TableCell>
                <TableCell>{this.props.privatekey}</TableCell>
            </TableRow>


            /*
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
            */
        )
    }
}

/*
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
*/
export default User;