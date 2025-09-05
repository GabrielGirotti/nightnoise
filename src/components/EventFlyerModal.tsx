import React from "react";

interface EventFlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
  flyerSrc: string;
  altText: string;
}

const EventFlyerModal: React.FC<EventFlyerModalProps> = ({
  isOpen,
  onClose,
  flyerSrc,
  altText,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      {/* Contenido del modal */}
      <div
        className="relative shadow-lg  overflow-hidden "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-200 hover:text-yellow-400 text-xl font-bold"
        >
          ✕
        </button>

        {/* Imagen del flyer */}
        <img
          src={flyerSrc}
          alt={altText}
          className="w-[100dvw] min-[563px]:max-h-[100dvh] min-[563px]:w-auto object-cover "
        />
      </div>
    </div>
  );
};

export default EventFlyerModal;
