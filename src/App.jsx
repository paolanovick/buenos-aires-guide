import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Hero from "./components/home/Hero";
import Welcome from "./components/home/Welcome";
import NeighborhoodsGrid from "./components/home/NeighborhoodsGrid";
import TopPlaces from "./components/home/TopPlaces";
import TangoSection from "./components/home/TangoSection";

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Welcome />
      <NeighborhoodsGrid />
      <TopPlaces />
      <TangoSection />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
