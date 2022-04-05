import "./App.scss";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="search">
          <input type="text" placeholder="Rechercher" />
        </div>
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
            <button>Modélisation</button>
            <button>Repères</button>
            <button>mixage</button>
            <button>Responsive</button>
            <button>Prise de vue</button>
            <button>Explainer</button>
          </div>
        </div>
        <p class="titre-sep">Toutes catégories</p>
        <div class="category">
          <div class="categories">
            <button class="categories-two-pink">
              <img src="" alt="" />
              <p class="name-category">Motion Design</p>
            </button>
          </div>
          <div class="categories">
            <button class="categories-two-reddish">
              <img src="" alt="" />
              <p class="name-category">Marketing</p>
            </button>
          </div>
          <div class="categories">
            <button class="categories-two-reddish">
              <img src="" alt="" />
              <p class="name-category">Développement</p>
            </button>
          </div>
          <div class="categories">
            <button class="categories-two-pink">
              <img src="" alt="" />
              <p class="name-category">Print</p>
            </button>
          </div>
        </div>
      </main>
      <footer>
        <div class="barre-nav">
          <button>
            <img src="" alt="" />
          </button>
          <button>
            <img src="" alt="" />
          </button>
          <button>
            <img src="" alt="" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
