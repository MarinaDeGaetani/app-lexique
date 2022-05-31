import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="sticky">
      <div className="barre-nav">
        <Link to="/definition">
          <button>
            <img
              src="imgs/search-icon-nav.svg"
              alt="search-icon"
              className="imgs-barre-nav"
            />
          </button>
        </Link>
        <Link to="/">
          <button>
            <img
              src="imgs/home-icon-gras.svg"
              alt="home-icon"
              className="imgs-barre-nav"
            />
          </button>
        </Link>
        <Link to="/motsdujour">
          <button>
            <img
              src="imgs/abc-icon.svg"
              alt="abc-icon"
              className="imgs-barre-nav"
            />
          </button>
        </Link>
      </div>
    </nav>
  );
};
