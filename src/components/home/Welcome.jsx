const Welcome = () => {
  return (
    <section className="py-24 bg-bgLight">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagen de Miguel */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Miguel Murdoch - Guía turístico"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary/10 rounded-lg -z-10"></div>
          </div>

          {/* Contenido */}
          <div className="space-y-6">
            <div>
              <span className="text-secondary text-sm font-medium tracking-widest uppercase">
                Bienvenidos
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">
                Descubrí Buenos Aires conmigo
              </h2>
              <div className="w-20 h-1 bg-secondary"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                ¡Hola! Soy <strong>Miguel Murdoch</strong>, tu guía turístico en
                Buenos Aires. Con más de 15 años de experiencia, te invito a
                explorar los secretos mejor guardados de esta fascinante ciudad.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Buenos Aires es una ciudad que enamora: sus barrios llenos de
                historia, su tango apasionado, su gastronomía de clase mundial y
                su gente cálida te cautivarán desde el primer momento.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Ya sea que estés buscando la elegancia de Recoleta, la bohemia
                de San Telmo, el color de La Boca o la modernidad de Palermo,
                tengo el tour perfecto para vos.
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    Tours personalizados
                  </h4>
                  <p className="text-sm text-gray-600">
                    Adaptados a tus intereses y ritmo
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    Horarios flexibles
                  </h4>
                  <p className="text-sm text-gray-600">
                    Mañana, tarde o noche - vos elegís
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Bilingüe ES/EN</h4>
                  <p className="text-sm text-gray-600">
                    Tours en español e inglés
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="mailto:mikemurdoch58@gmail.com"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contactame
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
