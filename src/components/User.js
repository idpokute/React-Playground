import React from "react";

export default function User({ user }) {
  const { email, name, username } = user;
  return (
    <div>
      <h2>
        {username}({name})
      </h2>
      <p>
        <b>e-mail:</b> {email}
      </p>
    </div>
  );
}
