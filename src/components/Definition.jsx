import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SearchPage } from "./Searchcomponents/Search";
import { Navbar } from "./Nav.jsx";

export const Definition = () => {
  const { state } = useLocation();

  useEffect(() => {}, []);
  return (
    <div>
      <SearchPage />
      <div>
        <p class="titre-definition">Définition : {state.definitionID}</p>
      </div>
      <div class="definition-flex">
        <div class="flex">
          <p class="titre-definition">Définition</p>
          <p class="para-definition">{}</p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};
