import "./GymLocations.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function GymLocations() {
  return (
    <div className="gym-locations-page-container">
      <h1>Our Locations:</h1>
      <div className="gym-location">
        <div className="map-container" id="map">
          <MapContainer
            center={[51.5144949, -0.4002003]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.5144949, -0.4002003]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="address-detail">
          <h2>Address:</h2>
          <p>Unit B</p>
          <p>Springfield Road Retail Park</p>
          <p>Hayes</p>
          <p>UB4 0TU</p>
        </div>
      </div>
    </div>
  );
}

export default GymLocations;
