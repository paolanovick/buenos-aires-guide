import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-bgLight">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Miguel Murdoch"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary/10 rounded-lg -z-10"></div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-secondary text-sm font-medium tracking-widest uppercase">
                {t("welcome.subtitle")}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">
                {t("welcome.title")}
              </h2>
              <div className="w-20 h-1 bg-secondary"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t("welcome.intro") }}
              ></p>
              <p className="text-gray-600 leading-relaxed">
                {t("welcome.paragraph1")}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t("welcome.paragraph2")}
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {t("welcome.feature1_title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("welcome.feature1_desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {t("welcome.feature2_title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("welcome.feature2_desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {t("welcome.feature3_title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("welcome.feature3_desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="mailto:mikemurdoch58@gmail.com"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
              >
                <span>✉</span>
                <span>{t("welcome.cta")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
