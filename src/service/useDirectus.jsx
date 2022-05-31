import { useEffect, useState } from "react";

export const useDirectus = () => {
    const [propositions, setPropositions] = useState([])
    const [isLoading, setIsLoading] = useState([])
    const [error, setError] = useState([])

    useEffect(() => {}, [word])

    const getPropositions = async (word) => {
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
      getPropositions();
    }, [word]);

