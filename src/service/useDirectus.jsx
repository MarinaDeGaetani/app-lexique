import { useEffect, useState } from "react";

export const useDirectus = (setPropositions) => {
  const [word, setWord] = useState("");

  useEffect(() => {
    getPropositions();
  }, [word]);

  const getPropositions = async () => {
    if (!word.trim()) {
      setPropositions([]);
      return;
    }

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

  return [setWord, word];
};

//export const useDirectus = () => {
//    const [propositions, setPropositions] = useState([])
//    const [isLoading, setIsLoading] = useState([])
//    const [error, setError] = useState([])
//
//    useEffect(() => {}, [word])
//
//    const getPropositions = async (word) => {
//        if (!word.trim()) return;
//
//        try {
//          const response = await fetch(
//            `https://sqhtg58u.directus.app/items/Definition?//field=name,id&filter[name][_starts_with]=${word}`
//          );
//          const { data } = await response.json();
//          //console.log(data);
//          setPropositions(data);
//        } catch (error) {
//          console.error("SearchInput > getDefinition > error >", //error);
//        }
//      };
//      getPropositions();
//    }, [word]);
