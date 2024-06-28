import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";

// eslint-disable-next-line react/prop-types
const Map = ({ height = "400px", positionMarker, setPositionMarker }) => {
  // const [positionMarker, setPositionMarker] = useState(null);
  const [coordsMap, setCoordsMap] = useState([-12.0630198, -77.0384351]);

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

    if (coordsMap) {
      console.log("coordsMap", coordsMap);
      //deberia solucionar la obtención de una referencia al mapa actual
      const _map = useMap();
      _map.flyTo(coordsMap);
    }

    return (
      <>
        {/* renderizo un Marcador en esa ubicación */}
        {position && <Marker position={position} />}
      </>
    )
  }

  useEffect(() => {
    // window recuerden no tiene que ser referenciado
    //para saber si tengo permisos
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        // console.log("LOCATION: ", location)
        // const { coords } = location;
        // const { latitude, longitude } = coords;
        const { coords: { latitude, longitude } } = location;
        setCoordsMap([latitude, longitude]);
      });
    }
  }, [])

  return (
    <div className="w-full border-2 border-gray-600" style={{ height: height }}>
      <MapContainer center={coordsMap} zoom={13}>
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
