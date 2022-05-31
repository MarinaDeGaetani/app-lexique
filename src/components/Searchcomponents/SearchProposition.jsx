export const SearchPropostion = ({ proposition, goToDefinition }) => (
  <button
    className="Proposition"
    onClick={() => goToDefinition(proposition.id)}
  >
    {" "}
    {proposition.name}
  </button>
);
