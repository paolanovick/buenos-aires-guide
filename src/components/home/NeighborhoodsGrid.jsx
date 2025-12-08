const neighborhoods = [
  {
    id: 1,
    name: "Palermo",
    description: "Bohemio, moderno y verde",
    image:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80",
    slug: "palermo",
  },
  {
    id: 2,
    name: "San Telmo",
    description: "Historia, tango y antigüedades",
    image:
      "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=800&q=80",
    slug: "san-telmo",
  },
  {
    id: 3,
    name: "La Boca",
    description: "Color, pasión y fútbol",
    image:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80",
    slug: "la-boca",
  },
  {
    id: 4,
    name: "Recoleta",
    description: "Elegancia y sofisticación",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    slug: "recoleta",
  },
  {
    id: 5,
    name: "Monserrat",
    description: "Casco histórico de la ciudad",
    image:
      "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=800&q=80",
    slug: "monserrat",
  },
  {
    id: 6,
    name: "San Nicolás",
    description: "Centro financiero y cultural",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    slug: "san-nicolas",
  },
  {
    id: 7,
    name: "Puerto Madero",
    description: "Modernidad junto al río",
    image:
      "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=800&q=80",
    slug: "puerto-madero",
  },
  {
    id: 8,
    name: "Belgrano",
    description: "Barrio residencial con encanto",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    slug: "belgrano",
  },
];

const NeighborhoodsGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase">
            Explorá Buenos Aires
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">
            Barrios Imperdibles
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada barrio tiene su propia personalidad. Descubrí la diversidad que
            hace única a Buenos Aires.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {neighborhoods.map((neighborhood) => (
            <div
              key={neighborhood.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Imagen */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              {/* Contenido */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2 group-hover:text-secondary transition-colors">
                  {neighborhood.name}
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  {neighborhood.description}
                </p>
                <div className="flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Explorar</span>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodsGrid;
