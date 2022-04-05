import { useState } from "react";

export const SearchInput = () => {
  const [word, setWord] = useState("");

  // pour faire une requete vers APi et avoir tableau qui s'affiche
  const [responses, setResponses] = useState([]);

  const onChange = (event) => {
    setWord(event.target.value);
  };

  return (
    <div className="search">
      <img
        src="imgs/Search-Icon.svg"
        alt="search-icon"
        className="img-barre-search
  "
      />
      <input
        type="text"
        placeholder="Rechercher"
        value={word}
        onChange={onChange}
      />
    </div>
  );
};
