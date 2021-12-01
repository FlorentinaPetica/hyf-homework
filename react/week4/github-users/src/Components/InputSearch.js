import React from "react";
import { useUser } from "../UserContext";

const InputSearch = () => {
  const { searchInput, setSearchInput } = useUser();
  // const { values } = useUser()

  const onChangeInput = (e) => {
    const searchValue = e.target.value;
    if (!searchValue) {
      setSearchInput("");
    } else setSearchInput(searchValue);
  };

  return (
    <div>
      <h1>GitHub user searcher</h1>

      <input type="text" value={searchInput} onChange={onChangeInput} />
    </div>
  );
};

export default InputSearch;
