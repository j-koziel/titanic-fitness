import "./GymLocations.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function GymLocations() {
  return (
    <div className="gym-locations-page-container">
      <div className="gym-location">
        <div className="map-container" id="map">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default GymLocations;
