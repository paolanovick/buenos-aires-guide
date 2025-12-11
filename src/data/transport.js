export const transportLines = [
  {
    id: "A",
    name: { es: "Línea A", en: "Line A" },
    color: "#009FE3",
    recorrido: {
      es: "Plaza de Mayo ↔ San Pedrito",
      en: "Plaza de Mayo ↔ San Pedrito",
    },
    estacionesDestacadas: {
      es: [
        "Plaza de Mayo",
        "Perú (Conexión Línea D)",
        "Lima (Conexión Línea C)",
        "Caballito",
        "San Pedrito",
      ],
      en: [
        "Plaza de Mayo",
        "Perú (Connection Line D)",
        "Lima (Connection Line C)",
        "Caballito",
        "San Pedrito",
      ],
    },
    conexiones: {
      es: [
        "Línea C en Lima",
        "Línea D en Catedral/Perú",
        "Línea E en Plaza de Mayo (hasta 2024 por extensión)",
      ],
      en: [
        "Line C at Lima",
        "Line D at Catedral/Perú",
        "Line E at Plaza de Mayo (until 2024 extension)",
      ],
    },
    horarios: {
      es: "Todos los días de 05:30 a 23:30. Frecuencia: 3–6 minutos.",
      en: "Daily from 05:30 to 23:30. Frequency: 3–6 minutes.",
    },
    tips: {
      es: [
        "La línea más histórica del subte porteño.",
        "Conecta Microcentro con zonas del oeste.",
        "Evitar horario pico (8–10hs / 17–19hs).",
      ],
      en: [
        "The oldest subway line in Buenos Aires.",
        "Connects downtown with western neighborhoods.",
        "Avoid rush hour (8–10am / 5–7pm).",
      ],
    },
  },

  {
    id: "B",
    name: { es: "Línea B", en: "Line B" },
    color: "#E3051B",
    recorrido: {
      es: "Leandro N. Alem ↔ Juan Manuel de Rosas",
      en: "Leandro N. Alem ↔ Juan Manuel de Rosas",
    },
    estacionesDestacadas: {
      es: [
        "Leandro N. Alem",
        "Carlos Pellegrini (Conexión Línea D)",
        "Pueyrredón",
        "Federico Lacroze",
        "Juan Manuel de Rosas",
      ],
      en: [
        "Leandro N. Alem",
        "Carlos Pellegrini (Connection Line D)",
        "Pueyrredón",
        "Federico Lacroze",
        "Juan Manuel de Rosas",
      ],
    },
    conexiones: {
      es: [
        "Línea C en Carlos Pellegrini",
        "Línea D en 9 de Julio",
        "Metrobús Juan B. Justo",
      ],
      en: [
        "Line C at Carlos Pellegrini",
        "Line D at 9 de Julio",
        "Juan B. Justo Metrobus",
      ],
    },
    horarios: {
      es: "Circula de 05:00 a 23:00. Frecuencia alta.",
      en: "Runs from 05:00 to 23:00. High frequency.",
    },
    tips: {
      es: [
        "Es la línea con más pasajeros.",
        "Ideal para conectar Microcentro con Villa Urquiza.",
        "En hora pico está muy cargada.",
      ],
      en: [
        "It is the busiest line.",
        "Ideal to connect downtown with Villa Urquiza.",
        "Very crowded during rush hour.",
      ],
    },
  },

  {
    id: "C",
    name: { es: "Línea C", en: "Line C" },
    color: "#003B70",
    recorrido: {
      es: "Retiro ↔ Constitución",
      en: "Retiro ↔ Constitución",
    },
    estacionesDestacadas: {
      es: [
        "Retiro (estación ferroviaria)",
        "Diagonal Norte (Conexión D)",
        "Avenida de Mayo (Conexión A)",
        "Constitución (terminal ferroviaria)",
      ],
      en: [
        "Retiro (train terminal)",
        "Diagonal Norte (Connection D)",
        "Avenida de Mayo (Connection A)",
        "Constitución (train terminal)",
      ],
    },
    conexiones: {
      es: [
        "Línea E en Retiro",
        "Línea A en Avenida de Mayo",
        "Línea D en Diagonal Norte",
      ],
      en: [
        "Line E at Retiro",
        "Line A at Avenida de Mayo",
        "Line D at Diagonal Norte",
      ],
    },
    horarios: {
      es: "05:00 a 23:30. Frecuencia muy alta.",
      en: "05:00 to 23:30. Very high frequency.",
    },
    tips: {
      es: [
        "La línea más corta, pero la más estratégica.",
        "Ideal para combinar con trenes Mitre, San Martín y Roca.",
      ],
      en: [
        "The shortest but most strategic line.",
        "Ideal for connecting to Mitre, San Martín and Roca trains.",
      ],
    },
  },

  {
    id: "D",
    name: { es: "Línea D", en: "Line D" },
    color: "#009739",
    recorrido: {
      es: "Catedral ↔ Congreso de Tucumán",
      en: "Catedral ↔ Congreso de Tucumán",
    },
    estacionesDestacadas: {
      es: [
        "Catedral",
        "9 de Julio (Conexión C y B)",
        "Pueyrredón",
        "Palermo",
        "Congreso de Tucumán",
      ],
      en: [
        "Catedral",
        "9 de Julio (Connection C and B)",
        "Pueyrredón",
        "Palermo",
        "Congreso de Tucumán",
      ],
    },
    conexiones: {
      es: [
        "Línea C en 9 de Julio",
        "Línea B en Pellegrini",
        "Línea H en Santa Fe",
      ],
      en: [
        "Line C at 9 de Julio",
        "Line B at Pellegrini",
        "Line H at Santa Fe",
      ],
    },
    horarios: {
      es: "05:00 a 23:20. Una de las líneas más estables.",
      en: "05:00 to 23:20. One of the most reliable lines.",
    },
    tips: {
      es: [
        "Perfecta para turistas: Palermo, Recoleta y Microcentro.",
        "Muy concurrida en horario laboral.",
      ],
      en: [
        "Perfect for tourists: Palermo, Recoleta, Downtown.",
        "Very crowded on weekdays.",
      ],
    },
  },

  {
    id: "E",
    name: { es: "Línea E", en: "Line E" },
    color: "#A05DA5",
    recorrido: {
      es: "Retiro ↔ Plaza de los Virreyes",
      en: "Retiro ↔ Plaza de los Virreyes",
    },
    estacionesDestacadas: {
      es: [
        "Retiro",
        "Correo Central (Conexión B)",
        "Bolívar (Conexión A)",
        "Once",
        "Plaza de los Virreyes",
      ],
      en: [
        "Retiro",
        "Correo Central (Connection B)",
        "Bolívar (Connection A)",
        "Once",
        "Plaza de los Virreyes",
      ],
    },
    conexiones: {
      es: [
        "Línea B en Correo Central",
        "Línea A en Bolívar",
        "Premetro en Plaza de los Virreyes",
      ],
      en: [
        "Line B at Correo Central",
        "Line A at Bolívar",
        "Premetro at Plaza de los Virreyes",
      ],
    },
    horarios: {
      es: "05:00 a 22:30. Frecuencia media.",
      en: "05:00 to 22:30. Medium frequency.",
    },
    tips: {
      es: [
        "Conecta de forma directa con el Premetro.",
        "Muy útil hacia la zona sudoeste.",
      ],
      en: [
        "Connects directly to the Premetro.",
        "Useful for southern neighborhoods.",
      ],
    },
  },

  {
    id: "H",
    name: { es: "Línea H", en: "Line H" },
    color: "#FFDD00",
    recorrido: {
      es: "Facultad de Derecho ↔ Hospitales",
      en: "Facultad de Derecho ↔ Hospitales",
    },
    estacionesDestacadas: {
      es: [
        "Facultad de Derecho",
        "Santa Fe (Conexión D)",
        "Once",
        "Corrientes (Conexión B)",
        "Hospitales",
      ],
      en: [
        "Facultad de Derecho",
        "Santa Fe (Connection D)",
        "Once",
        "Corrientes (Connection B)",
        "Hospitales",
      ],
    },
    conexiones: {
      es: ["Línea B en Corrientes", "Línea D en Santa Fe"],
      en: ["Line B at Corrientes", "Line D at Santa Fe"],
    },
    horarios: {
      es: "06:00 a 23:00. Línea moderna y accesible.",
      en: "06:00 to 23:00. Modern and accessible line.",
    },
    tips: {
      es: [
        "La línea más nueva del sistema.",
        "Ideal para Recoleta y Facultad de Derecho.",
      ],
      en: [
        "The newest line in the network.",
        "Ideal for Recoleta and Law School.",
      ],
    },
  },
];
