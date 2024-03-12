import { useState } from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Topics from "./pages/Topics";
import FeaturedPost from "./pages/FeaturedPost";
import "./App.css";
import Home from "./components/Home";

function App() {
  return <>
  <Navigation/>
  <Home/>
  <Topics/>
  <FeaturedPost/>
  <Footer/>
  </>;
}

export default App;
