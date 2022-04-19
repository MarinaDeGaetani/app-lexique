import { SearchInput } from "./SearchInput.jsx";
import { Navbar } from "./Nav.jsx";

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput />
      </header>
      <main>
        <div className="more-search">
          <p className="titre-sep">Les plus recherchés</p>
          <div className="button">
            <button>Template</button>
            <button>Marketing de masse</button>
            <button>Interface</button>
            <button>Benchmark</button>
            <button>storytelling</button>
            <button>Exporter</button>
            <button>Seo</button>
            <button>Fond perdu</button>
            <button>
              <span>Modélisation</span>
            </button>
            <button>Repères</button>
            <button>mixage</button>
            <button>Responsive</button>
            <button>Prise de vue</button>
            <button>Explainer</button>
          </div>
        </div>
        <p className="titre-sep">Toutes catégories</p>
        <div className="category">
          <div className="categories">
            <button className="categories-two-pink">
              <img
                src="imgs/motion-design.svg"
                alt="motion-design-icon"
                className="img-categories"
              />
              <p className="name-category">Motion Design</p>
            </button>
          </div>
          <div className="categories">
            <button className="categories-two-reddish">
              <img
                src="imgs/marketing.svg"
                alt="marketing-icon"
                className="img-categories"
              />
              <p className="name-category">Marketing</p>
            </button>
          </div>
          <div className="categories">
            <button className="categories-two-reddish">
              <img
                src="imgs/developpement.svg"
                alt="developpement-icon"
                className="img-categories"
              />
              <p className="name-category">Développement</p>
            </button>
          </div>
          <div className="categories">
            <button className="categories-two-pink">
              <img
                src="imgs/print.svg"
                alt="print-icon"
                className="img-categories"
              />
              <p className="name-category">Print</p>
            </button>
          </div>
        </div>
      </main>
      <Navbar />
    </div>
  );
}
