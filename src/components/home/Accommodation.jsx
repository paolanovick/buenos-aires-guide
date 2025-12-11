import { useState } from "react";
import { useTranslation } from "react-i18next";
import AccommodationModal from "../common/AccommodationModal";

const accommodations = [
  {
    id: 1,
    name: { es: "Departamento Estilo Francés", en: "French Style Apartment" },
    subtitle: { es: "Piso 3 Letra L", en: "Floor 3 Letter L" },
    style: {
      es: "Elegancia clásica parisina con molduras, techos altos y decoración refinada que te transporta a la Europa del siglo XIX.",
      en: "Classic Parisian elegance with moldings, high ceilings and refined decoration that transports you to 19th century Europe.",
    },
    mainImage: "https://i.imgur.com/SJIV0ZK.jpg",
    gallery: [
      "https://i.imgur.com/SJIV0ZK.jpg",
      "https://i.imgur.com/SJIV0ZK.jpg",
      "https://i.imgur.com/SJIV0ZK.jpg",
    ],
    features: {
      es: [
        "95m² de superficie",
        "2 dormitorios con balcón",
        "1 baño completo + toilette",
        "WiFi, TV plana, caja seguridad",
        "Cocina equipada con desayunador",
        "Splits frío/calor",
        "Pisos de parquet de roble",
        "Edificio histórico 1905",
      ],
      en: [
        "95m² surface",
        "2 bedrooms with balcony",
        "1 full bathroom + toilet",
        "WiFi, flat TV, safe",
        "Equipped kitchen with breakfast bar",
        "AC/Heating",
        "Oak parquet floors",
        "Historic building 1905",
      ],
    },
    fullDescription: {
      es: "Impecable apartamento de categoría de 95m2 de superficie. Se encuentra en un clásico edificio de época estilo Francés, construido en el año 1905 muy bien mantenido y perfecto hasta 4 pasajeros muy exigentes que buscan una propiedad única y diferente. Decorado con muy buen gusto con un estilo moderno, contemporáneo, pisos de parquet de roble de eslavonia, aberturas medio punto de cedro macizo, splits frío, calor en todos los ambientes. Compuesto por 2 dormitorios, con balcón a la calle, con wifi, tv plana, caja de seguridad y frigobar; hall de entrada con estar; living; comedor; 1 baño completo; 1 toilette; cocina con barra para desayuno (microondas; lavaplatos; cafetera de cápsulas; tostadora; jarra eléctrica; heladera; cocina; vajilla y batería de cocina) lavadero. Se encuentra a una cuadra de Avenida Mayo y a una cuadra y media de Avenida 9 de Julio. A diez cuadras tanto del emblemático barrio de San Telmo como del barrio mas nuevo y exclusivo de la ciudad, Puerto Madero. A cuatro cuadras de la calle peatonal Florida y muy cerca de los mejores Teatros y Restaurantes de Buenos Aires. Conviven allí todas las líneas de subtes y colectivos.",
      en: "Impeccable 95m2 category apartment located in a classic French-style building from 1905, very well maintained and perfect for up to 4 demanding guests seeking a unique and different property.",
    },
  },
  {
    id: 2,
    name: { es: "Departamento Estilo Europeo", en: "European Style Apartment" },
    subtitle: { es: "Piso 2 Letra I", en: "Floor 2 Letter I" },
    style: {
      es: "Diseño contemporáneo minimalista con líneas limpias, espacios funcionales y estética moderna que refleja el confort europeo actual.",
      en: "Contemporary minimalist design with clean lines, functional spaces and modern aesthetics that reflects current European comfort.",
    },
    mainImage: "https://i.imgur.com/KAjG3UG.jpeg",
    gallery: [
      "https://i.imgur.com/KAjG3UG.jpeg",
      "https://i.imgur.com/KAjG3UG.jpeg",
      "https://i.imgur.com/KAjG3UG.jpeg",
    ],
    features: {
      es: [
        "110m² de superficie",
        "2 dormitorios con balcón",
        "2 baños completos",
        "WiFi, TV plana, caja seguridad",
        "Cocina equipada con desayunador",
        "Splits frío/calor",
        "Pisos de parquet de roble",
        "Edificio histórico 1905",
      ],
      en: [
        "110m² surface",
        "2 bedrooms with balcony",
        "2 full bathrooms",
        "WiFi, flat TV, safe",
        "Equipped kitchen with breakfast bar",
        "AC/Heating",
        "Oak parquet floors",
        "Historic building 1905",
      ],
    },
    fullDescription: {
      es: "Impecable apartamento de categoría de 110m2 de superficie. Se encuentra en un clásico edificio de época estilo Francés, construido en el año 1905 muy bien mantenido y perfecto hasta 4 pasajeros muy exigentes que buscan una propiedad única y diferente.",
      en: "Impeccable 110m2 category apartment located in a classic French-style building from 1905, very well maintained and perfect for up to 4 demanding guests seeking a unique and different property.",
    },
  },
];

const Accommodation = () => {
  const { t, i18n } = useTranslation();
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (accommodation) => {
    setSelectedAccommodation(accommodation);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-bgLight">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-secondary text-sm font-medium tracking-widest uppercase">
              {t("accommodation.subtitle")}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">
              {t("accommodation.title")}
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed">
            <p className="mb-4">
              {i18n.language === "es"
                ? "Ubicado en el barrio de Monserrat, casco histórico de la ciudad autónoma de Buenos Aires. Allí se encuentran los lugares turísticos más importantes de la ciudad. A 3 cuadras la Plaza de Mayo, la Casa Rosada, la Catedral Metropolitana y el Cabildo."
                : "Located in the Monserrat neighborhood, historic center of Buenos Aires. Here you will find the city's most important tourist sites. 3 blocks to Plaza de Mayo, Casa Rosada, Metropolitan Cathedral and Cabildo."}
            </p>
            <p>
              {i18n.language === "es"
                ? "En el Casco Histórico se puede visitar la Manzana de las Luces y los túneles ocultos. San Telmo está a diez cuadras, y Puerto Madero, el barrio más nuevo y exclusivo de la ciudad."
                : "In the Historic Quarter you can visit the Manzana de las Luces and hidden tunnels. San Telmo is ten blocks away, and Puerto Madero, the newest and most exclusive neighborhood."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {accommodations.map((accommodation) => (
              <div
                key={accommodation.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="relative h-96 overflow-hidden cursor-pointer"
                  onClick={() => handleOpenModal(accommodation)}
                >
                  <img
                    src={accommodation.mainImage}
                    alt={accommodation.name[i18n.language]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-serif mb-4 drop-shadow-lg">
                        {accommodation.name[i18n.language]}
                      </h3>
                      <p className="text-lg leading-relaxed drop-shadow-md">
                        {accommodation.style[i18n.language]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif text-primary mb-2 text-center">
                    {accommodation.name[i18n.language]}
                  </h3>
                  <p className="text-sm text-gray-500 text-center mb-4">
                    {accommodation.subtitle[i18n.language]}
                  </p>
                  <button
                    onClick={() => handleOpenModal(accommodation)}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 px-6 rounded-lg font-medium transition-all"
                  >
                    {t("accommodation.btnDetails")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AccommodationModal
        accommodation={selectedAccommodation}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Accommodation;
