import React, {Component} from 'react';
import User from './components/User';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auth"
  },
  table: {
    minWidth: 1080
  }
});

const users =[
  {
    'userid':1,
    'id': 'nari1539',
    'password': '1539',
    'image': 'https://placeimg.com/64/63/4',
    'name': '박진우',
    'email': 'nari1539@naver.com',
    'auth': '1',
    'privatekey': 'N0122314TZ'
  },
  {
    'userid':2,
    'id': 'ckckckckck',
    'password': 'ck123',
    'image': 'https://placeimg.com/64/63/3',
    'name': '이창국',
    'email': 'ckckck@naver.com',
    'auth': '1',
    'privatekey': 'N8892344ZZ'
  },
  {
    'userid':3,
    'id': 'integer',
    'password': 'int123',
    'image': 'https://placeimg.com/64/63/1',
    'name': '유정수',
    'email': 'integer@naver.com',
    'auth': '2',
    'privatekey': 'T0133T314Z'
  }
]

class App extends Component{
  render() {
      const { classes } = this.props;
      return (
        <Paper className={classes.root}>
         <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Num</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Auth</TableCell>
              <TableCell>PrivateKey</TableCell>
            </TableRow>
           </TableHead> 
          <TableBody>
          {users.map(c => {
            return <User key={c.userid}
                          userid={c.userid}
                          id={c.id}
                          password={c.password}
                          image={c.image}
                          name={c.name}
                          email={c.email}
                          auth={c.auth}
                          privatekey={c.privatekey}
                    />
          })}       
          </TableBody>          
         </Table>
        </Paper>
    );
  }
}

export default withStyles(styles)(App);
