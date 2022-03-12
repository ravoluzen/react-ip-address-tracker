import { useMap } from 'react-leaflet';

const ChangeMapView = ({coordinates}) => {
    const map = useMap();
    map.setView(coordinates, map.getZoom());
      
    return null;
}

export default ChangeMapView