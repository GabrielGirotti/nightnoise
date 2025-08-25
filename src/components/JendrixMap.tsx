export default function JendrixMap() {
  return (
    <div
      role="region"
      aria-label="Mapa de ubicación de Jendrix Rock Bar en Alicante"
      className="w-full max-w-[90dvw] rounded-2xl overflow-hidden shadow-lg"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6257.9633242732!2d-0.4904863246217952!3d38.349406478852686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237ab46dd3bd3%3A0x3bb825635e358e69!2sJendrix%20Rock%20Bar%20-%20Alacant!5e0!3m2!1ses!2ses!4v1756116247774!5m2!1ses!2ses"
        title="Mapa de ubicación de Jendrix Rock Bar en Alicante"
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