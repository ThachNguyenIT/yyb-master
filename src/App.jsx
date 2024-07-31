import { useState } from "react";
import "./App.css";
import { Footer, Header } from "./components";
import { HomePage } from "./pages";
import React from "react";
import ConnectWallet from "./ConnectWallet";

function App() {
  return (
    <>
      <Header />
      <ConnectWallet />
      <div>
        <HomePage />
      </div>
      <div className="relative">
        <Footer />
      </div>
    </>
  );
}

export default App;
