import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GirisSayfasi from "./component/girisSayfasi/GirisSayfasi";
import React from "react";
import AnaMenu from "./component/AnaMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<GirisSayfasi/>}/>
          <Route path={'/anamenu'} element={<AnaMenu/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
