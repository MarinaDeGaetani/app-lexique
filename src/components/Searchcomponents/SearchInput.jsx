import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SearchInput = ({ setPropositions }) => {
  const [word, setWord] = useState("");

  useEffect(() => {
    const getDefinition = async () => {
      if (!word.trim()) return;

      try {
        const response = await fetch(
          `https://sqhtg58u.directus.app/items/Definition?field=name,id&filter[name][_starts_with]=${word}`
        );
        const { data } = await response.json();
        //console.log(data);
        setPropositions(data);
      } catch (error) {
        console.error("SearchInput > getDefinition > error >", error);
      }
    };
    getDefinition();
  }, [word]);

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
