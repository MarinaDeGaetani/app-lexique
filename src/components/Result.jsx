import { useLocation } from "react-router-dom";

export const Definition = () => {
  const { state } = useLocation();
  return (
    <>
      <p>Définition : {state.definition}</p>
    </>
  );
};
