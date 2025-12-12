import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import Accommodation from "../components/home/Accommodation";
import NeighborhoodsGrid from "../components/home/NeighborhoodsGrid";
import TopPlaces from "../components/home/TopPlaces";
import TangoSection from "../components/home/TangoSection";
import ArteCultura from "../components/home/ArteCultura";
import TransportSection from "../components/home/TransportSection";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

           <section id="accommodation">
        <Accommodation />
      </section>

      <section id="neighborhoods">
        <NeighborhoodsGrid />
      </section>

      <section id="places">
        <TopPlaces />
      </section>

      <section id="tango">
        <TangoSection />
      </section>

      <section id="culture">
        <ArteCultura />
      </section>

      <section id="transport">
        <TransportSection />
      </section>
    </div>
  );
};

export default Home;
