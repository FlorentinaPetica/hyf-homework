import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [count, setCount] = useState(0);

  const fetchGitUsers = async (input) => {
    try {
      await fetch(`https://api.github.com/search/users?q=${input}`)
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not fetch the data ");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          setUsers(data.items);
          setCount(data.total_count);
          setLoading(false);
        });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!searchInput || error) {
      setLoading(false);
    } else {
      setLoading(true);
      fetchGitUsers(searchInput);
    }
  }, [searchInput, error]);

  return (
    <UserContext.Provider
      value={{ users, searchInput, setSearchInput, loading, count, error }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext);

export default UserProvider;
