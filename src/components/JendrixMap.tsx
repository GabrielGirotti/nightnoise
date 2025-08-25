import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix para que aparezcan los íconos del marker en producción
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function JendrixMap(): JSX.Element {
  return (
    <section
      aria-label="Ubicación de Jendrix Rock Bar en el mapa"
      className="w-full max-w-[90dvw] rounded-2xl overflow-hidden shadow-lg"
    >
      <MapContainer
        center={[38.3452, -0.4818]} // Coordenadas aproximadas de Alicante centro
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "300px", width: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[38.3452, -0.4818]}>
          <Popup>
            🍻 Jendrix Rock Bar <br /> C. José Gutiérrez Petén, 41 · Alicante
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
