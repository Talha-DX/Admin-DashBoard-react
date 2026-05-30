import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const VectorMaps = () => {
  const position = [30.1575, 71.5249]; // Multan, Pakistan (Your Location)

  const deliveryLocations = [
    { id: 1, position: [30.1575, 71.5249], name: "Multan Hub", status: "Active" },
    { id: 2, position: [31.5204, 74.3587], name: "Lahore Warehouse", status: "Busy" },
    { id: 3, position: [24.8607, 67.0011], name: "Karachi Port", status: "Active" },
    { id: 4, position: [33.6844, 73.0479], name: "Islamabad Office", status: "Active" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Geographic Map</h1>
        <p className="text-gray-600">Real-time location tracking across Pakistan</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Live Locations</h2>
          <div className="text-sm text-green-600 font-medium">● 142 Active Shipments</div>
        </div>

        <div className="h-[620px] w-full">
          <MapContainer
            center={position}
            zoom={6}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />

            {deliveryLocations.map((loc) => (
              <Marker key={loc.id} position={loc.position}>
                <Popup>
                  <div className="font-medium">{loc.name}</div>
                  <div className="text-sm text-green-600">Status: {loc.status}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default VectorMaps;