import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import L from "leaflet";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const PlaceDetailModal = ({ place, isOpen, onClose }) => {
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

  if (!isOpen || !place) return null;

  const sections = place.sections?.[i18n.language] || [];

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
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="h-[300px] md:h-[400px]"
            >
              {place.gallery?.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${place.name[i18n.language]} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-2">
                {place.name[i18n.language]}
              </h2>
              {place.type && (
                <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  {place.type[i18n.language]}
                </span>
              )}
            </div>

            <div className="mb-8 space-y-6">
              {sections.length > 0 ? (
                sections.map((section, index) => (
                  <div key={index} className="border-l-4 border-secondary pl-4">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-700 leading-relaxed text-lg">
                  {place.fullDescription?.[i18n.language]}
                </p>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {i18n.language === "es" ? "Ubicación" : "Location"}
              </h3>
              <div className="rounded-lg overflow-hidden border-2 border-gray-200 shadow-md">
                <MapContainer
                  center={[place.coordinates.lat, place.coordinates.lng]}
                  zoom={15}
                  style={{ height: "400px", width: "100%" }}
                  scrollWheelZoom={true}
                  dragging={true}
                  zoomControl={true}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  />
                  <Marker
                    position={[place.coordinates.lat, place.coordinates.lng]}
                    icon={markerIcon}
                  >
                    <Popup>{place.name[i18n.language]}</Popup>
                  </Marker>
                </MapContainer>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                {i18n.language === "es"
                  ? "Hacé clic y arrastrá para explorar el mapa"
                  : "Click and drag to explore the map"}
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-8 py-3 border-2 border-gray-300 hover:border-primary hover:text-primary text-gray-700 rounded-lg font-medium transition-all"
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

export default PlaceDetailModal;
