import { MapContainer, TileLayer } from "react-leaflet";

type LeafletMapProps = {
  latitude: number
  longitude: number
}

export default function LeafletMap(props: LeafletMapProps) {
  return (
    <div className="w-full flex flex-col h-fit gap-3">
      <h5 className="text-h5 text-blue-950" id="view-on-map">Map</h5>
      <MapContainer center={[props.latitude, props.longitude]} zoom={15} scrollWheelZoom={false} style={{width: "100%", height: 380}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
} 