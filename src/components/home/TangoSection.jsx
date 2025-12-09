import { useTranslation } from "react-i18next";

const TangoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 bg-primary overflow-hidden">
      {/* Background Pattern */}
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
                {t("tango.subtitle")}
              </span>
              <h2 className="text-5xl md:text-6xl font-serif mt-4 mb-6">
                {t("tango.title")}
              </h2>
              <div className="w-20 h-1 bg-secondary"></div>
            </div>

            <p className="text-xl text-white/80 leading-relaxed">
              {t("tango.intro")}
            </p>

            <p className="text-lg text-white/70 leading-relaxed">
              {t("tango.paragraph")}
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                {t("tango.btnShows")}
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium transition-all border border-white/30">
                {t("tango.btnLearn")}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-serif text-secondary">100+</div>
                <div className="text-sm text-white/60 mt-1">
                  {t("tango.stat1")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif text-secondary">50+</div>
                <div className="text-sm text-white/60 mt-1">
                  {t("tango.stat2")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif text-secondary">1880</div>
                <div className="text-sm text-white/60 mt-1">
                  {t("tango.stat3")}
                </div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TangoSection;
