import React from 'react';




const LogIn  = (props) => {
  const { user, signIn, signOut } = props;



    return(
      <div> {user ?
        <h2>Signed in as {this.state.user && this.state.user.email}
        <button className="sign" onClick={()=>signOut()}>Sign Out</button></h2>
        : <button className="sign"
                  onClick={()=>signIn()}>Sign In</button>}
      </div>
    );
};
module.exports = LogIn;
