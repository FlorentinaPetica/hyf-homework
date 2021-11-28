import React from "react";
import { useUser } from "../UserContext";

const UserList = () => {
  const { users, loading, count, error } = useUser();
  // const { values } = useUser()

  return (
    <ul style={{ listStyleType: "none" }}>
      {loading ? (
        <li>Loading...</li>
      ) : error ? (
        <li>{error}</li>
      ) : count === 0 ? (
        <li>No items</li>
      ) : (
        users.map((user) => {
          return (
            <li key={user.id}>
              {user.login} <a href={user.html_url}>{user.html_url}</a>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default UserList;
