import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { tangoLearning } from "../../data/tango";
import { useTranslation } from "react-i18next";
import PlaceDetailModal from "../common/PlaceDetailModal";

import "swiper/css";
import "swiper/css/navigation";

const TangoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n, ready } = useTranslation();

  if (!ready) return <div>Loading...</div>;

  const handleOpenModal = (place) => {
    setSelectedPlace(place);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-white to-bgLight overflow-hidden">
        {/* HEADER */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase">
            {t("tango.subtitle")}
          </span>

          <h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">
            {t("tango.title")}
          </h2>

          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>

          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
            {t("tango.intro")}
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative pb-2">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1.1}
            centeredSlides={true}
            spaceBetween={15}
            loop={true}
            navigation={{
              prevEl: ".tango-prev",
              nextEl: ".tango-next",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 2.5, spaceBetween: 20 },
              1024: { slidesPerView: 3.8, spaceBetween: 25 },
              1280: { slidesPerView: 4.5, spaceBetween: 30 },
            }}
          >
            {tangoLearning.map((place, index) => {
              const isActive = index === activeIndex;

              return (
                <SwiperSlide key={place.id}>
                  <div
                    className={`relative h-[620px] sm:h-[600px] md:h-[550px] bg-white rounded-lg overflow-hidden transition-all duration-700 ease-out mb-20
                      ${
                        isActive
                          ? "shadow-[0_20px_35px_rgba(0,0,0,0.25)] scale-[1.06] z-20"
                          : "shadow-[0_14px_25px_rgba(0,0,0,0.15)] scale-95 z-10 opacity-80"
                      }
                    `}
                  >
                    {/* IMAGEN */}
                    <div
                      className={`absolute top-0 left-0 right-0 overflow-hidden transition-all duration-700 ease-in-out
                        ${
                          isActive
                            ? "h-[300px] sm:h-[220px] md:h-[200px]"
                            : "h-[540px] sm:h-[520px] md:h-[470px]"
                        }
                      `}
                    >
                      <img
                        src={place.image}
                        alt={place.name[i18n.language]}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* CONTENIDO */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 bg-white flex flex-col items-center text-center transition-all duration-700 ease-in-out
                        ${
                          isActive
                            ? "h-[320px] sm:h-[380px] md:h-[350px] justify-start pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6"
                            : "h-[80px] justify-center px-6"
                        }
                      `}
                    >
                      {/* Badge tipo */}
                      {isActive && (
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <span>💃</span>
                          <span>{place.type[i18n.language]}</span>
                        </div>
                      )}

                      {/* Nombre */}
                      <h3
                        className={`font-serif text-primary uppercase tracking-wider transition-all duration-700
                          ${
                            isActive
                              ? "text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3"
                              : "text-base sm:text-lg md:text-xl mb-0"
                          }
                        `}
                      >
                        {place.name[i18n.language]}
                      </h3>

                      {isActive && (
                        <>
                          <div className="w-12 h-0.5 bg-secondary mb-3 sm:mb-4"></div>

                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-sm px-2 line-clamp-6">
                            {place.shortDescription[i18n.language]}
                          </p>

                          <div className="w-full px-4 mb-2">
                            <button
                              onClick={() => handleOpenModal(place)}
                              className="w-full bg-secondary hover:bg-secondary/90 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded font-medium transition-all text-xs uppercase tracking-widest"
                            >
                              {t("tango.btnDetails")}
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

          {/* CONTROLES */}
          <div className="flex items-center justify-center gap-6 md:gap-8 mt-4 md:mt-8 pb-4 relative">
            <button className="tango-prev w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-secondary hover:bg-secondary hover:text-white text-secondary transition-all flex items-center justify-center bg-white shadow-lg">
              <span className="text-xl">←</span>
            </button>

            <div className="text-secondary font-medium text-base md:text-lg">
              {activeIndex + 1} / {tangoLearning.length}
            </div>

            <button className="tango-next w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-secondary hover:bg-secondary hover:text-white text-secondary transition-all flex items-center justify-center bg-white shadow-lg">
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>

      <PlaceDetailModal
        place={selectedPlace}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default TangoSection;
