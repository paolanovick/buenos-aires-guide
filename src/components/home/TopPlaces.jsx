import Button from "../shared/Button";

const topPlaces = [
  {
    id: 1,
    name: "Obelisco",
    neighborhood: "San Nicolás",
    description: "El ícono más emblemático de Buenos Aires",
    image:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80",
    type: "Monumento",
  },
  {
    id: 2,
    name: "Teatro Colón",
    neighborhood: "San Nicolás",
    description: "Uno de los mejores teatros de ópera del mundo",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    type: "Cultura",
  },
  {
    id: 3,
    name: "Caminito",
    neighborhood: "La Boca",
    description: "Calle museo llena de color y arte",
    image:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80",
    type: "Atracción",
  },
  {
    id: 4,
    name: "Cementerio de Recoleta",
    neighborhood: "Recoleta",
    description: "Impresionante museo al aire libre",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    type: "Historia",
  },
  {
    id: 5,
    name: "Café Tortoni",
    neighborhood: "Monserrat",
    description: "El café más antiguo de Buenos Aires (1858)",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    type: "Gastronomía",
  },
  {
    id: 6,
    name: "Puente de la Mujer",
    neighborhood: "Puerto Madero",
    description: "Puente giratorio diseñado por Calatrava",
    image:
      "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800&q=80",
    type: "Arquitectura",
  },
];

const TopPlaces = () => {
  return (
    <section className="py-24 bg-bgLight">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase">
            Lo Mejor de Buenos Aires
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">
            Lugares Más Visitados
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desde monumentos icónicos hasta joyas escondidas. Estos son los
            lugares que no podés dejar de visitar.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {topPlaces.map((place) => (
            <div
              key={place.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Imagen */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                  {place.type}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{place.neighborhood}</span>
                </div>

                <h3 className="text-2xl font-serif text-primary mb-3 group-hover:text-secondary transition-colors">
                  {place.name}
                </h3>

                <p className="text-gray-600 mb-4">{place.description}</p>

                <button className="flex items-center gap-2 text-secondary font-medium group-hover:gap-3 transition-all">
                  <span>Ver más</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="primary" size="lg">
            Ver Todos los Lugares
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopPlaces;
