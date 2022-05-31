export const Navbar = () => {
  return (
    <nav className="sticky">
      <div className="barre-nav">
        <button>
          <img
            src="imgs/search-icon-nav.svg"
            alt="search-icon"
            className="imgs-barre-nav"
          />
        </button>
        <button>
          <img
            src="imgs/home-icon-gras.svg"
            alt="home-icon"
            className="imgs-barre-nav"
          />
        </button>
        <button>
          <img
            src="imgs/abc-icon.svg"
            alt="abc-icon"
            className="imgs-barre-nav"
          />
        </button>
      </div>
    </nav>
  );
};
