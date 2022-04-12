import { useState } from "react";
//import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const [word, setWord] = useState("");

  //const navigate = useNavigate();

  //
  //const goToResult = (e) => {
  //  navigate("/result", { state: { definition: "abcd" } });
  //};

  const onChange = (event) => {
    setWord(event.target.value);
    //Appel API
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
        //onClick={goToResult}
      />
    </div>
  );
};
