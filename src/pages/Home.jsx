import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import NeighborhoodsGrid from "../components/home/NeighborhoodsGrid";
import TopPlaces from "../components/home/TopPlaces";
import TangoSection from "../components/home/TangoSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <section id="bienvenida">
        <Welcome />
      </section>
      <section id="barrios">
        <NeighborhoodsGrid />
      </section>
      <section id="lugares">
        <TopPlaces />
      </section>
      <section id="tango">
        <TangoSection />
      </section>
    </div>
  );
};

export default Home;
