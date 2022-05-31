import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { SearchPage } from "./Searchcomponents/Search";
import { Navbar } from "./Nav.jsx";

export const Definition = () => {
  const { state } = useLocation();
  const [definition, setDefinition] = useState(null);

  useEffect(() => {
    const getDefinition = async () => {
      try {
        const response = await fetch(
          `https://sqhtg58u.directus.app/items/Definition/${state.definitionID}`
        );

        const { data } = await response.json();

        if (data.errors) {
          console.error(
            "Definition.jsx > useEffect > data.errors.message>",
            data.errors.message
          );
          return;
        }
        setDefinition(data);
      } catch (error) {
        console.error("SearchInput > getDefinition > error > ", error);
      }
    };
    getDefinition();
  }, [state.definitionID]);

  return (
    <div>
      <SearchPage />
      <div>
        {definition ? (
          <p className="titre-definition-1">{definition.name}</p>
        ) : (
          <p>Chargement...</p>
        )}
      </div>
      <div className="definition-flex">
        <div className="flex">
          <p className="titre-definition">Définition</p>

          {definition ? (
            <p className="para-definition">{definition.content}</p>
          ) : (
            <p>Chargement...</p>
          )}
        </div>
      </div>
      <Navbar />
    </div>
  );
};
