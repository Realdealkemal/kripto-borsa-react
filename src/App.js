import './App.css';
import './css/AnaMenu.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GirisSayfasi from "./component/girisSayfasi/GirisSayfasi";
import React from "react";
import AnaMenu from "./component/AnaMenu";
import UyeOl from "./component/girisSayfasi/UyeOl";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<GirisSayfasi/>}/>
          <Route path={'/uyeOl'} element={<UyeOl/>}/>
          <Route path={'/anamenu'} element={<AnaMenu/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
