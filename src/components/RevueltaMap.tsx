export default function RevueltaMap() {
  return (
    <div
      role="region"
      aria-label="Mapa de ubicación de Sala La Revuelta en Alicante"
      className="w-full max-w-[90dvw] rounded-2xl overflow-hidden shadow-lg"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.714765756358!2d-0.5438731246192465!3d38.40184367579266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6233f5c9acec63%3A0xaac04836dc905cb1!2sSala%20La%20Revuelta!5e0!3m2!1ses!2ses!4v1756127823097!5m2!1ses!2ses"
        title="Mapa de ubicación de Sala La Revuelta en Alicante"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
