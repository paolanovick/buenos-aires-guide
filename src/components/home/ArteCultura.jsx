import { useTranslation } from "react-i18next";

const ArteCultura = () => {
  const { t, i18n } = useTranslation();

  const culturalHighlights = [
    {
      id: 1,

      title: { es: "Cafés Históricos", en: "Historic Cafés" },
      description: {
        es: "Espacios donde escritores, artistas y pensadores dieron forma a la identidad porteña.",
        en: "Spaces where writers, artists and thinkers shaped Buenos Aires identity.",
      },
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    },
    {
      id: 2,

      title: { es: "Teatros Emblemáticos", en: "Iconic Theaters" },
      description: {
        es: "Desde el Teatro Colón hasta las salas independientes, el arte escénico vive intensamente.",
        en: "From Teatro Colón to independent venues, performing arts thrive intensely.",
      },
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
    },
    {
      id: 3,

      title: { es: "Arte Urbano", en: "Street Art" },
      description: {
        es: "Murales gigantes transforman la ciudad en una galería a cielo abierto.",
        en: "Giant murals transform the city into an open-air gallery.",
      },
      image:
        "https://turismo.buenosaires.gob.ar/sites/turismo/files/field/image/Holmberg980.jpg",
    },
    {
      id: 4,

      title: { es: "Milongas y Tango", en: "Milongas and Tango" },
      description: {
        es: "El alma de Buenos Aires late en cada abrazo, cada paso, cada mirada en la pista.",
        en: "The soul of Buenos Aires beats in every embrace, every step, every glance on the dance floor.",
      },
      image:
        "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase">
            {t("culture.subtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">
            {t("culture.title")}
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            {t("culture.intro1")}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {t("culture.intro2")}
          </p>
        </div>

        {/* Cultural Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {culturalHighlights.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Background */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title[i18n.language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="text-2xl font-serif mb-2">
                  {item.title[i18n.language]}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {item.description[i18n.language]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto text-center py-12 px-6 bg-bgLight rounded-2xl">
          <div className="text-6xl text-secondary mb-4">"</div>
          <p className="text-xl md:text-2xl font-serif text-primary mb-4 italic">
            {t("culture.quote")}
          </p>
          <p className="text-gray-600">{t("culture.quoteAuthor")}</p>
        </div>

        {/* Bottom Description */}
        <div className="mt-16 max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-center">
            {t("culture.outro")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArteCultura;
