import { useState } from "react";
import { useTranslation } from "react-i18next";
import AccommodationModal from "../common/AccommodationModal";

const accommodations = [
  {
    id: 1,
    name: { es: "Departamento Estilo Francés", en: "French Style Apartment" },
    style: {
      es: "Elegancia clásica parisina con molduras, techos altos y decoración refinada que te transporta a la Europa del siglo XIX.",
      en: "Classic Parisian elegance with moldings, high ceilings and refined decoration that transports you to 19th century Europe.",
    },
    mainImage: "https://i.imgur.com/SJIV0ZK.jpg",
    gallery: ["https://i.imgur.com/SJIV0ZK.jpg"],
    features: {
      es: [
        "2 habitaciones amplias",
        "Capacidad para 4 personas",
        "Cocina totalmente equipada",
        "WiFi de alta velocidad",
        "Aire acondicionado",
        "Ubicación céntrica",
      ],
      en: [
        "2 spacious bedrooms",
        "Capacity for 4 people",
        "Fully equipped kitchen",
        "High-speed WiFi",
        "Air conditioning",
        "Central location",
      ],
    },
    fullDescription: {
      es: "Este hermoso departamento de estilo francés combina la elegancia clásica con las comodidades modernas. Sus techos altos, molduras originales y ventanales amplios crean un ambiente luminoso y sofisticado.",
      en: "This beautiful French-style apartment combines classic elegance with modern comforts. Its high ceilings, original moldings and large windows create a bright and sophisticated atmosphere.",
    },
  },
  {
    id: 2,
    name: { es: "Departamento Estilo Europeo", en: "European Style Apartment" },
    style: {
      es: "Diseño contemporáneo minimalista con líneas limpias, espacios funcionales y estética moderna que refleja el confort europeo actual.",
      en: "Contemporary minimalist design with clean lines, functional spaces and modern aesthetics that reflects current European comfort.",
    },
    mainImage: "https://i.imgur.com/KAjG3UG.jpeg",
    gallery: ["https://i.imgur.com/KAjG3UG.jpeg"],
    features: {
      es: [
        "1 habitación con escritorio",
        "Capacidad para 2 personas",
        "Cocina moderna equipada",
        "WiFi de alta velocidad",
        "Calefacción y aire",
        "Zona tranquila",
      ],
      en: [
        "1 bedroom with desk",
        "Capacity for 2 people",
        "Modern equipped kitchen",
        "High-speed WiFi",
        "Heating and AC",
        "Quiet area",
      ],
    },
    fullDescription: {
      es: "Departamento de estilo europeo contemporáneo, perfecto para parejas o viajeros que buscan un espacio moderno y funcional. Su diseño minimalista crea un ambiente acogedor.",
      en: "Contemporary European-style apartment, perfect for couples or travelers looking for a modern and functional space. Its minimalist design creates a cozy environment.",
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
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-medium tracking-widest uppercase">
              {t("accommodation.subtitle")}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">
              {t("accommodation.title")}
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              {t("accommodation.intro")}
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
                  <h3 className="text-2xl font-serif text-primary mb-4 text-center">
                    {accommodation.name[i18n.language]}
                  </h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleOpenModal(accommodation)}
                      className="flex-1 bg-secondary hover:bg-secondary/90 text-white py-3 px-6 rounded-lg font-medium transition-all"
                    >
                      {t("accommodation.btnGallery")}
                    </button>
                    <a
                      href="mailto:mikemurdoch58@gmail.com"
                      className="flex-1 border-2 border-secondary hover:bg-secondary hover:text-white text-secondary py-3 px-6 rounded-lg font-medium transition-all text-center"
                    >
                      {t("accommodation.btnContact")}
                    </a>
                  </div>
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
