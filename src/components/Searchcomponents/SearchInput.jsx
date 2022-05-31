import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDirectus } from "../../service/useDirectus";

export const SearchInput = ({ setPropositions }) => {
  //const [word, setWord] = useState("");
  const { setWord, word } = useDirectus(setPropositions);

  const navigate = useNavigate();

  const goToDefinition = (definitionID) => {
    navigate("/definition", { state: { definitionID } });
  };

  const getDefinition = () => {};

  return (
    <div className="search">
      <button onClick={goToDefinition} className="btn-non-utiliser">
        <img
          src="imgs/Search-Icon.svg"
          alt="search-icon"
          className="img-barre-search
        "
        />
      </button>
      <input
        type="search"
        placeholder="Rechercher"
        value={word}
        onChange={(event) => setWord(event.target.value)}
        onClick={() => getDefinition()}
      />
    </div>
  );
};
