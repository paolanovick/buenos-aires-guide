import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { neighborhoods } from "../../data/neighborhoods";

import "swiper/css";
import "swiper/css/navigation";

const NeighborhoodsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-bgLight overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase">
            Explorá Buenos Aires
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">
            Barrios Imperdibles
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
      </div>

      {/* Carousel + Navigation Container */}
      <div className="relative pb-6">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.1}
          centeredSlides={true}
          spaceBetween={15}
          loop={true}
          navigation={{
            prevEl: ".neighborhoods-prev",
            nextEl: ".neighborhoods-next",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 3.8, spaceBetween: 25 },
            1280: { slidesPerView: 4.5, spaceBetween: 30 },
          }}
          className="neighborhoods-carousel"
        >
          {neighborhoods.map((neighborhood, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={neighborhood.id}>
                <div
                  className={`relative h-[620px] sm:h-[600px] md:h-[550px] bg-white rounded-lg overflow-hidden transition-all duration-700 ease-out mb-20
                    ${
                      isActive
                        ? "shadow-[0_20px_35px_rgba(0,0,0,0.25)] scale-[1.06] z-20"
                        : "shadow-[0_14px_25px_rgba(0,0,0,0.15)] scale-95 z-10 opacity-80"
                    }`}
                >
                  {/* Imagen */}
                  <div
                    className={`absolute top-0 left-0 right-0 overflow-hidden transition-all duration-700 ease-in-out ${
                      isActive
                        ? "h-[180px] sm:h-[200px]"
                        : "h-[540px] sm:h-[520px] md:h-[470px]"
                    }`}
                  >
                    <img
                      src={neighborhood.image}
                      alt={neighborhood.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Contenido */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 bg-white flex flex-col items-center text-center transition-all duration-700 ease-in-out ${
                      isActive
                        ? "h-[440px] sm:h-[400px] md:h-[350px] justify-start pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6"
                        : "h-[80px] justify-center px-6"
                    }`}
                  >
                    {/* Título */}
                    <h3
                      className={`font-serif text-primary uppercase tracking-wider transition-all duration-700 ${
                        isActive
                          ? "text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3"
                          : "text-base sm:text-lg md:text-xl mb-0"
                      }`}
                    >
                      {neighborhood.name}
                    </h3>

                    {isActive && (
                      <>
                        <div className="w-12 h-0.5 bg-primary mb-3 sm:mb-4"></div>

                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-sm px-2">
                          {neighborhood.fullDescription}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full px-2 sm:px-4 mt-auto mb-4">
                          <button className="flex-1 bg-primary hover:bg-primary/90 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded font-medium transition-all text-xs uppercase tracking-widest">
                            Explorar
                          </button>
                          <button className="flex-1 border-2 border-primary hover:bg-primary hover:text-white text-primary py-2 sm:py-2.5 px-3 sm:px-4 rounded font-medium transition-all text-xs uppercase tracking-widest">
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

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 md:gap-8 mt-8 pb-4 relative">
          <button className="neighborhoods-prev w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary hover:bg-primary hover:text-white text-primary transition-all flex items-center justify-center bg-white shadow-lg">
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
            {activeIndex + 1} / {neighborhoods.length}
          </div>

          <button className="neighborhoods-next w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary hover:bg-primary hover:text-white text-primary transition-all flex items-center justify-center bg-white shadow-lg">
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
      </div>
    </section>
  );
};

export default NeighborhoodsGrid;
