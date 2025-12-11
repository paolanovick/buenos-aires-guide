import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { transportLines } from "../../data/transport";
import TransportModal from "../common/TransportModal";


export default function TransportSection() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
  <span className="text-secondary text-sm font-medium tracking-widest uppercase">
    
  </span>

  <h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">
    {t("transport.title")}
  </h2>

  <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>

  <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
    {t("transport.description")}
  </p>


        {/* MAPA CLICKEABLE */}
        <div
          onClick={() => setOpen(true)}
          className="cursor-pointer rounded-2xl overflow-hidden shadow-lg border hover:shadow-xl transition"
        >
          <img
            src="https://buenosaires.gob.ar/sites/default/files/inline-images/Mapa%20de%20red%20de%20accesibilidad%202025_marzo-01.png"
            alt="Mapa Subte Buenos Aires"
            className="w-full object-contain"
          />
        </div>

        {open && (
          <TransportModal
            onClose={() => setOpen(false)}
            lines={transportLines}
          />
        )}
      </div>
    </section>
  );
}
