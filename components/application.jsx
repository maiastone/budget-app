import React from 'react';
import firebase from 'firebase';
// import firebase, { reference, signIn, signOut} from '../firebase';
import { pick, map, extend } from 'lodash';

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  signIn () {
    let google = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(google);
  };


  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({user});
    });
  }



  render() {
    return (
      <div>hello
          <div id="userName"> {user ?
            <p>Logged in as {user.displayName.split(' ')[0]}
            <button className="sign" onClick={()=> signOut()}>Sign Out</button></p>
            : <button className="sign" onClick={() => signIn()}>Sign In</button>}
          </div>
      </div>
    )
  }
}

module.exports = Application;
