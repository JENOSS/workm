import React, {Component} from 'react';
//mport logo from './logo.svg';
import User from './components/User';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <P>COME ON YOU SPURS</P>
      </header>
    </div>
  );
}
*/


const user ={
  'name': '박진우',
  'birth': '960325',
  'gender': 'man',
  'auth': '1'
}

class App extends Component{
  render() {
      return (
        <User
         name={user.name}
         birth={user.birth}
         gender={user.gender}
         auth={user.auth}
        />
      );
  }
}

export default App;
