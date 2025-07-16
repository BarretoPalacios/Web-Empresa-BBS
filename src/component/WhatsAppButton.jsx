// components/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/51933238447?text=Hola,%20vi%20tu%20página%20web%20y%20estoy%20interesado%20en%20tus%20servicios"
      className="z-30 fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 group "
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp group-hover:scale-110 transition-transform"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
      </svg>
      <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded whitespace-nowrap">
        ¡Contáctanos!
      </span>
    </a>
  );
};

export default WhatsAppButton;