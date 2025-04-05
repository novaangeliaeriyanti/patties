import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function Map(props: any) {
  const tileLayerOptions = {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }

  return (
    <div className="w-full h-60 md:h-96 lg:h-[450px] border-4 border-mayo rounded-3xl lg:border-[6px] overflow-hidden">
      <MapContainer {...props} scrollWheelZoom={false} style={{ height: "100%", width: "100%",zIndex: 1}}>
        <TileLayer
          {...tileLayerOptions}
        />
        <Marker position={props?.center}>
          <Popup>
            Patties Smashburger
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}