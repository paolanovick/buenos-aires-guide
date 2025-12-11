import React from "react";
import { useTranslation } from "react-i18next";

export default function TransportModal({ lines, onClose }) {
  const { t, i18n } = useTranslation();
  if (!lines) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* HEADER FIJO */}
        <div className="flex items-center justify-between px-6 py-4 border-b relative bg-white">
          <h2 className="text-2xl font-bold">{t("transport.title")}</h2>

          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 
            text-gray-500 hover:text-black text-4xl p-2"
          >
            ×
          </button>
        </div>

        {/* 🔥 TODO EL MODAL (MAPA + CONTENIDO) SCROLLEA */}
        <div className="overflow-y-auto flex-1">
          {/* MAPA — AHORA FORMA PARTE DEL SCROLL */}
          <img
            src="https://buenosaires.gob.ar/sites/default/files/inline-images/Mapa%20de%20red%20de%20accesibilidad%202025_marzo-01.png"
            alt="Mapa subte Buenos Aires"
            className="w-full h-auto"
          />

          {/* CONTENIDO */}
          <div className="p-6 space-y-10">
            {lines.map((line) => (
              <div key={line.id} className="space-y-4 border-b pb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: line.color }}
                  ></div>
                  <h3 className="text-xl font-semibold">
                    {line.name[i18n.language]}
                  </h3>
                </div>

                {/* Recorrido */}
                <div>
                  <h4 className="font-semibold text-lg">
                    {t("transport.recorrido")}
                  </h4>
                  <p className="text-gray-700">
                    {line.recorrido[i18n.language]}
                  </p>
                </div>

                {/* Estaciones destacadas */}
                <div>
                  <h4 className="font-semibold text-lg">
                    {t("transport.estacionesDestacadas")}
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700">
                    {line.estacionesDestacadas[i18n.language].map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </div>

                {/* Conexiones */}
                <div>
                  <h4 className="font-semibold text-lg">
                    {t("transport.conexiones")}
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700">
                    {line.conexiones[i18n.language].map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>

                {/* Horarios */}
                <div>
                  <h4 className="font-semibold text-lg">
                    {t("transport.horarios")}
                  </h4>
                  <p className="text-gray-700">
                    {line.horarios[i18n.language]}
                  </p>
                </div>

                {/* Tips */}
                <div>
                  <h4 className="font-semibold text-lg">
                    {t("transport.tips")}
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700">
                    {line.tips[i18n.language].map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
