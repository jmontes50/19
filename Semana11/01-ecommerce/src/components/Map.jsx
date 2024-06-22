import { MapContainer, TileLayer } from "react-leaflet";

const Map = ({ height = "400px" }) => {
  return (
    <div className="w-full border-2 border-gray-600" style={{ height: height }}>
      <MapContainer center={[-12.0630198, -77.0384351]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map;
