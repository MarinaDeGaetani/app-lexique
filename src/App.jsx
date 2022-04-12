import "./style/App.scss";
//import { Home } from "./components/Search/Home.jsx";
import { Definition } from "./components/Result";
import { Motdujour } from "./components/Motsdujour";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      {/* <Route path="" element={<Home />} /> */}
      <Route path="definition" element={<Definition />} />
      <Route path="" element={<Motdujour />} />
    </Routes>
  );
};

export default App;
