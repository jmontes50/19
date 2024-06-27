import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

// eslint-disable-next-line react/prop-types
const Map = ({ height = "400px" }) => {
  const [positionMarker, setPositionMarker] = useState(null);

  const LocationMarker = ({ position, setPosition }) => {
    const map = useMapEvents({
      //aqui puedo configurar el evento que desee, estamos dando un objeto a useMapEvents
      //con esto estamos detectanto las coordenadas en el mapa
      click(e) {
        // console.log("LocationMarker", e)
        //detecto la lat y lng
        const { lat, lng } = e.latlng;
        //actualizo el estado de setPosition con esa lat y lng
        setPosition([lat, lng]);
        //me muevo a esas coordenadas
        map.flyTo(e.latlng, map.getZoom());
      }
    })

    return (
      <>
        {/* renderizo un Marcador en esa ubicación */}
        {position && <Marker position={position} />}
      </>
    )
  }

  return (
    <div className="w-full border-2 border-gray-600" style={{ height: height }}>
      <MapContainer center={[-12.0630198, -77.0384351]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position={positionMarker} setPosition={setPositionMarker} />
        {/* <Marker position={[-12.07, -77.0384351]} /> */}
      </MapContainer>
    </div>
  );
};

export default Map;
