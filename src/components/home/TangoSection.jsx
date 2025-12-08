import Button from "../shared/Button";

const TangoSection = () => {
  return (
    <section className="relative py-32 bg-primary overflow-hidden">
      {/* Background Pattern (opcional) */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="text-white space-y-8">
            <div>
              <span className="text-secondary text-sm font-medium tracking-widest uppercase">
                El Alma de Buenos Aires
              </span>
              <h2 className="text-5xl md:text-6xl font-serif mt-4 mb-6">
                Tango Porteño
              </h2>
              <div className="w-20 h-1 bg-secondary"></div>
            </div>

            <p className="text-xl text-white/80 leading-relaxed">
              El tango es mucho más que una danza: es el alma de Buenos Aires.
              Nacido en los arrabales, creció entre guitarras, bandoneones y
              abrazos intensos.
            </p>

            <p className="text-lg text-white/70 leading-relaxed">
              Hoy, el tango porteño vibra en cada milonga, cada esquina y cada
              mirada que se cruza en la pista. Es nostalgia y celebración,
              tradición y reinvención.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button variant="primary" size="lg">
                Ver Shows de Tango
              </Button>
              <Button variant="outline-light" size="lg">
                Aprender a Bailar
              </Button>
            </div>

            {/* Stats (opcional) */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-serif text-secondary">100+</div>
                <div className="text-sm text-white/60 mt-1">Milongas</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-secondary">50+</div>
                <div className="text-sm text-white/60 mt-1">Shows</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-secondary">1880</div>
                <div className="text-sm text-white/60 mt-1">Desde</div>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80"
                alt="Tango dancers"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TangoSection;
