export const Navbar = () => {
  return (
    <nav className="sticky">
      <div className="barre-nav">
        <button>
          <a href="">
            <img
              src="imgs/search-icon-nav.svg"
              alt="search-icon"
              className="imgs-barre-nav"
            />
          </a>
        </button>
        <button>
          <a href="">
            <img
              src="imgs/home-icon-gras.svg"
              alt="home-icon"
              className="imgs-barre-nav"
            />
          </a>
        </button>
        <button>
          <a href="">
            <img
              src="imgs/abc-icon.svg"
              alt="abc-icon"
              className="imgs-barre-nav"
            />
          </a>
        </button>
      </div>
    </nav>
  );
};
