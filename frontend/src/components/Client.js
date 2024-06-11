import React from "react";
import Avatar from "react-avatar";


function Client({ username }) {
  return (
    <div className="client-container" style = {{width: 200}}>
      <Avatar
        name={username.toString()}
        size={50}
        round="14px"
        className="client-avatar"
      />
      <span className="client-username">{username.toString()}</span>
    </div>
  );
}

export default Client;
