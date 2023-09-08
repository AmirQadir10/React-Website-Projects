import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Route/Layout";
import HOME from "./Route/Home";
import ABOUT from "./Route/About";
import SERVICE from "./Route/Service";
import PORTFOLIO from "./Route/Portfolio";
import PAGES from "./Route/Pages";
import 'bootstrap/dist/css/bootstrap.min.css';


// import Footer from "./component/Footer.js";


export default function App() {

  
  return (
<div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HOME />} />
          <Route path="About" element={<ABOUT />} />
          <Route path="Service" element={<SERVICE />} />
          <Route path="Portfolio" element={<PORTFOLIO />} />
          <Route path="Pages" element={<PAGES />} />
        </Route>
      </Routes>
    </BrowserRouter>



</div>
    

  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);