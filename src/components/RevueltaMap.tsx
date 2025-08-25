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

export default function RevueltaMap(): JSX.Element {
  return (
    <section
      aria-label="Ubicación de Sala La Revuelta en el mapa"
      className="w-full max-w-[90dvw] rounded-2xl overflow-hidden shadow-lg"
    >
      <MapContainer
        center={[38.4018437, -0.5438731]} // Latitud, Longitud
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "300px", width: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[38.4018437, -0.5438731]}>
          <Popup>
            📍 Sala La Revuelta <br /> Alicante, España
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
