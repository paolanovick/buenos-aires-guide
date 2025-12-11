import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AccommodationModal = ({ accommodation, isOpen, onClose }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !accommodation) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all"
          >
            <span className="text-2xl text-gray-700">×</span>
          </button>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="h-[400px] md:h-[500px]"
            >
              {accommodation.gallery?.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${accommodation.name[i18n.language]} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                {accommodation.name[i18n.language]}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {accommodation.fullDescription[i18n.language]}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {i18n.language === "es" ? "Características" : "Features"}
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {accommodation.features[i18n.language].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="text-secondary text-xl">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:mikemurdoch58@gmail.com"
                className="flex-1 bg-secondary hover:bg-secondary/90 text-white py-3 px-6 rounded-lg font-medium transition-all text-center"
              >
                {i18n.language === "es"
                  ? "Consultar disponibilidad"
                  : "Check availability"}
              </a>
              <button
                onClick={onClose}
                className="flex-1 border-2 border-gray-300 hover:border-primary hover:text-primary text-gray-700 py-3 px-6 rounded-lg font-medium transition-all"
              >
                {i18n.language === "es" ? "Cerrar" : "Close"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationModal;
