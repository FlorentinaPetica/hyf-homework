import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const UserList = () => {
  const { users, loading, count, error } = useContext(UserContext);

  return (
    <ul style={{ listStyleType: 'none' }}>
      { loading ? (<li>Loading...</li>) :
        error ? (<li>{error}</li>) :
        count ===  0 ? (<li>No items</li>) :
        (
        users.map((user) => {
          return <li key={user.id} >{user.login} <a href={user.html_url}>{user.html_url}</a></li>}))}
    </ul>
  );
};

export default UserList;