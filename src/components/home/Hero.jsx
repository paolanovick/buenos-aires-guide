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
        "https://media.viajando.travel/p/7cd389472e64fd8c50c970458b35dc04/adjuntos/236/imagenes/000/737/0000737957/buenos-aires-obelisco.jpg",
      title: t("hero.slide1_title"),
      subtitle: t("hero.slide1_subtitle"),
      
    },
    {
      id: 2,
      image:
        "https://tribusviajeras.com/wp-content/uploads/2024/02/Descubre-la-Cultura-Argentina-Tango-Vino-y-Asado-1024x683.webp",
      title: t("hero.slide2_title"),
      subtitle: t("hero.slide2_subtitle"),
     
    },
    {
      id: 3,
      image:
        "https://media.laopinionline.ar/p/2aa9a482e435ac26a599512c04ad756c/adjuntos/370/imagenes/100/066/0100066212/790x0/smart/noche-cupulasjpeg.jpeg",
      title: t("hero.slide3_title"),
      subtitle: t("hero.slide3_subtitle"),
      
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
                 
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </div>
  );
};

export default Hero;
