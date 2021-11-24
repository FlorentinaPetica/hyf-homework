import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const InputSearch = () => {
  const { searchInput, setSearchInput } = useContext(UserContext);

  const onChangeInput = (e) => {
    const searchValue = e.target.value
    if (!searchValue) {
      setSearchInput("")
    } else
    setSearchInput(searchValue);
  }

  return (
    <div>
      <h1>GitHub user searcher</h1>

      <input
        type="text"
        value={searchInput}
        onChange={onChangeInput}
      />
    </div>
  );
};

export default InputSearch;
