import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Default coordinates (your company location)
const position = [6.4752861, 3.5851846];
 // Example: New York City

// Custom Red Marker Icon
const redIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [40, 40],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Animated Marker Component
const AnimatedMarker = ({ position }) => {
  const markerRef = React.useRef(null);

  React.useEffect(() => {
    const marker = markerRef.current;
    if (marker) {
      marker.openPopup(); // Automatically open popup on load
    }
  }, []);

  return (
    <Marker ref={markerRef} position={position} icon={redIcon}>
      <Popup>
        <b className='text-[#005fa3]'>Ivory Homes Limited</b>
        <br />
        HFP Eastline shopping complex,
        <br />
         Abraham Adesaya, 
         <br/>
         Ajah,Lagos,Nigeria.      
      </Popup>
    </Marker>
  );
};

const CustomMap = () => {
  return (
    <div className="container mx-auto py-12 px-6 bg-[#FFF5EE] rounded-lg shadow-md">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-6">
        Find Us Here
      </h2>

      {/* Map Container */}
      <div className="overflow-hidden rounded-lg border border-[#FF7F50] shadow-md">
        <MapContainer
          center={position}
          zoom={15}
          style={{ width: "100%", height: "400px" }}
          className="rounded-lg"
        >
          {/* Tile layer for the map background */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Animated Marker */}
          <AnimatedMarker position={position} />
        </MapContainer>
      </div>
    </div>
  );
};

export default CustomMap;
