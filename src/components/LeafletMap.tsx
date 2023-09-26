import { useMap } from "react-leaflet";

const LeafletMap = ({ center }) => {
    const map = useMap();
    map.setView(center, map.getZoom());
    return null;
}

export default LeafletMap