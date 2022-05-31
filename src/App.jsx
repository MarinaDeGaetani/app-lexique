import "./style/App.scss";
import { Home } from "./components/Home.jsx";
import { Definition } from "./components/Definition";
//import { Motdujour } from "./components/Motsdujour";
import { SearchPage } from "./components/Searchcomponents/Search.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="definition" element={<Definition />} />
      <Route path="search" element={<SearchPage />} />
      {/*<Route path="" element={<Motdujour />} />*/}
    </Routes>
  );
};

export default App;
