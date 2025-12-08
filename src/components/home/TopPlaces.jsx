import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { topPlaces } from "../../data/neighborhoods";

import "swiper/css";
import "swiper/css/navigation";

const TopPlaces = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase">
            Lo Mejor de Buenos Aires
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">
            Lugares Más Visitados
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
      </div>

      {/* Carousel - Full Width */}
      <div className="relative pb-20">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.1}
          centeredSlides={true}
          spaceBetween={15}
          loop={true}
          navigation={{
            prevEl: ".places-prev",
            nextEl: ".places-next",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 25 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="places-carousel"
        >
          {topPlaces.map((place, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={place.id}>
                <div
                  className={`relative h-[550px] bg-white rounded-lg overflow-hidden transition-all duration-700 ease-out ${
                    isActive
                      ? "shadow-2xl scale-105 z-20"
                      : "shadow-xl scale-95 opacity-70 z-10"
                  }`}
                  style={{
                    transform: isActive
                      ? "scaleX(1.08) scaleY(1.02)"
                      : "scaleX(0.92) scaleY(0.98)",
                  }}
                >
                  {/* Imagen */}
                  <div
                    className={`absolute top-0 left-0 right-0 overflow-hidden transition-all duration-700 ease-in-out ${
                      isActive ? "h-[200px]" : "h-[470px]"
                    }`}
                  >
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                      {place.type}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 bg-white flex flex-col items-center text-center transition-all duration-700 ease-in-out ${
                      isActive
                        ? "h-[350px] justify-start pt-8 px-6"
                        : "h-[80px] justify-center px-6"
                    }`}
                  >
                    {/* Ubicación */}
                    {isActive && (
                      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-3">
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
                    )}

                    {/* Título */}
                    <h3
                      className={`font-serif text-primary uppercase tracking-wider transition-all duration-700 ${
                        isActive
                          ? "text-xl md:text-2xl mb-3"
                          : "text-lg md:text-xl mb-0"
                      }`}
                    >
                      {place.name}
                    </h3>

                    {/* Línea divisoria */}
                    {isActive && (
                      <div className="w-12 h-0.5 bg-primary mb-4"></div>
                    )}

                    {/* Descripción */}
                    {isActive && (
                      <>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 max-w-sm px-2">
                          {place.fullDescription}
                        </p>

                        {/* Botones */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full px-4">
                          <button className="flex-1 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded font-medium transition-all text-xs uppercase tracking-widest">
                            Ver Más
                          </button>
                          <button className="flex-1 border-2 border-primary hover:bg-primary hover:text-white text-primary py-2 px-4 rounded font-medium transition-all text-xs uppercase tracking-widest">
                            Detalles
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 md:gap-8 mt-8">
        <button
          className="places-prev w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary hover:bg-primary hover:text-white text-primary transition-all flex items-center justify-center bg-white shadow-lg"
          aria-label="Previous"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
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

        <div className="text-primary font-medium text-base md:text-lg">
          {activeIndex + 1} / {topPlaces.length}
        </div>

        <button
          className="places-next w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary hover:bg-primary hover:text-white text-primary transition-all flex items-center justify-center bg-white shadow-lg"
          aria-label="Next"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
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
    </section>
  );
};

export default TopPlaces;
