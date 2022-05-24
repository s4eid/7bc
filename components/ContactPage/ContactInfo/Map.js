import { GoogleMap, Marker } from "react-google-maps";

export default function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 38.64403004130668, lng: 34.83221456271912 }}
    >
      <Marker
        position={{
          lat: 38.64403004130668,
          lng: 34.83221456271912,
        }}
      />
    </GoogleMap>
  );
}
