import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker} from "react-leaflet";
import { Icon } from "leaflet";
import LeafletMap from "./LeafletMap";
import iconLocation from "../assets/icon-location.svg"
import { Player } from "@lottiefiles/react-lottie-player";
import noResults from "../assets/empty.json"



const Map = ({lat, lng, isError}) => {
  const customIcon = new Icon({
    iconUrl: iconLocation,
  })


  if (isError) {
    return (
      <div className="flex-auto grid place-content-center [&>*]:grayscale [&>*]:opacity-50">
          <div>
            <Player autoplay loop src={noResults} style={{width: 300}}></Player>
            <h3 className="text-center opacity-70 mx-auto max-w-lg"> Oops, this is awkward. We couldn't locate the IP Address you searched for. Could you try another one?</h3>
          </div>
      </div>
    )
  }

  return (
    <MapContainer center={[lat, lng]} zoom={15}>
      <LeafletMap center={[lat, lng]}/>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={customIcon}> </Marker>
    </MapContainer>
  )
}

export default Map