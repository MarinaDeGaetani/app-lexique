import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Definition = () => {
  const { state } = useLocation();

  useEffect(() => {}, []);
  return (
    <>
      <p>Définition : {state.definitionID}</p>
    </>
  );
};
