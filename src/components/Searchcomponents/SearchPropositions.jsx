import { SearchPropostion } from "./SearchProposition";

export const SearchPropositions = ({ propositions, goToDefinition }) => (
  <div>
    {propositions.map((propostion) => (
      <SearchPropostion
        proposition={propostion}
        key={propostion.id}
        goToDefinition={goToDefinition}
      />
    ))}
  </div>
);
