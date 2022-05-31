import { Navbar } from "./Search/Nav";

export const Motdujour = () => {
  return (
    <section className="fond-mot-du-jour">
      <img src="imgs/vector-chat.svg" alt="" />
      <div className="Motdujour">
        <img src="imgs/vector-chat.svg" alt="" />
        <h1 className="titre-mdj">Mot du jour</h1>
        <h2 className="sous-titre-mdj">Fond Perdu</h2>
        <p className="anglais-mdj">En. Borderless printing, bleed area</p>
        <p className="definition-mdj">
          Le fond perdu, également appelé débordement, désigne la bordure qui
          s’étend au-delà du format final de l’imprimé.
        </p>
      </div>
      <Navbar />
    </section>
  );
};
