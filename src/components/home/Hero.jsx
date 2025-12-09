import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  const { t } = useTranslation();

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1920&q=80",
      title: t("hero.slide1_title"),
      subtitle: t("hero.slide1_subtitle"),
      description: t("hero.slide1_description"),
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1920&q=80",
      title: t("hero.slide2_title"),
      subtitle: t("hero.slide2_subtitle"),
      description: t("hero.slide2_description"),
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=1920&q=80",
      title: t("hero.slide3_title"),
      subtitle: t("hero.slide3_subtitle"),
      description: t("hero.slide3_description"),
    },
  ];

  return (
    <div id="hero" className="relative h-screen w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-2xl md:text-3xl text-secondary font-light mb-6 animate-fade-in-delay-1">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-delay-2">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center animate-fade-in-delay-3">
                    <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                      {t("hero.btn1")}
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium transition-all border border-white/30">
                      {t("hero.btn2")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-sm font-medium">{t("hero.scroll")}</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
