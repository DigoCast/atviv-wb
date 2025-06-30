import React, { Fragment } from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cliente from "../pages/Cliente";
import CadastroCliente from "../pages/CadastroCliente";

const RouterApp: React.FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/cadastrocliente" element={<CadastroCliente />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default RouterApp;
