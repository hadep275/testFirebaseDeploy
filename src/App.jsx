import { useState } from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Topics from "./pages/Topics";
import FeaturedPost from "./pages/FeaturedPost";
import "./App.css";

function App() {
  return <>
  <Navigation/>
  <Topics/>
  <FeaturedPost/>
  <Footer/>
  </>;
}

export default App;
