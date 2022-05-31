import { SearchInput } from "./SearchInput.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchPropositions } from "./SearchPropositions.jsx";

export const SearchPage = () => {
  const [propositions, setPropositions] = useState([]);

  const navigate = useNavigate();

  const goToDefinition = (definitionID) => {
    navigate("/definition", { state: { definitionID } });
  };

  return (
    <main>
      <SearchInput setPropositions={setPropositions} />
      <SearchPropositions
        propositions={propositions}
        goToDefinition={goToDefinition}
      />
    </main>
  );
};
