import {Routes, Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import About from "./pages/About";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Introduction />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
