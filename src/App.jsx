import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navigate from "./Component/Navigate";
import NotFound from "./Pages/NotFound";
import Animate from "./Component/Animate";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="mx-auto max-w-[720px] mobile:mx-5 dek:my-6 box-border relative z-10">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Navigate />
        </div>
        <Animate />
      </BrowserRouter>
    </>
  );
}

export default App;
