import Hero from "../components/home/Hero";
import Accommodation from "../components/home/Accommodation";
import NeighborhoodsGrid from "../components/home/NeighborhoodsGrid";
import TopPlaces from "../components/home/TopPlaces";
import TangoSection from "../components/home/TangoSection";
import TransportSection from "../components/home/TransportSection";


const Home = () => {
  return (
    <div>
      <Hero />
      <section id="bienvenida">
        <Accommodation />
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
      <section id="tango">
        <TransportSection />
      </section>
    </div>
  );
};

export default Home;
