import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Button from "../shared/Button";

const Hero = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1920&q=80",
      title: "Buenos Aires",
      subtitle: "La Ciudad que Enamora",
      description:
        "Descubrí la elegancia europea con la calidez latinoamericana",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1920&q=80",
      title: "Puerto Madero",
      subtitle: "Modernidad junto al río",
      description: "El barrio más joven y cosmopolita de la ciudad",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542737081-bde28c5b79fb?w=1920&q=80",
      title: "Recoleta",
      subtitle: "Elegancia y cultura",
      description: "Historia, arte y arquitectura europea",
    },
  ];

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        navigation={{
          nextEl: ".hero-button-next",
          prevEl: ".hero-button-prev",
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Imagen de fondo */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Contenido */}
              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-2xl md:text-3xl text-secondary font-serif mb-6 animate-fade-in-delay-1">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center animate-fade-in-delay-3">
                    <Button variant="primary" size="lg">
                      Explorar
                    </Button>
                    <Button variant="outline-light" size="lg">
                      Ver más
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flechas de navegación */}
      <button className="hero-button-prev absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300">
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button className="hero-button-next absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300">
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
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
  );
};

export default Hero;
