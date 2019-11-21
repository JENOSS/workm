import React, {Component} from 'react';

import User from './components/User';
import './App.css';

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
      return (
        <div>
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
      </div>       
    );
  }
}

export default App;
