import './App.css'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps'

const apiKey = import.meta.env.VITE_MAPS_API_KEY;
const mapsID = import.meta.env.VITE_MAPS_ID;

function App() {
  
const position = { lat: 53, lng: 10};

  return (
    <APIProvider apiKey={apiKey}>
      
      <div style={{height: "100vh"}}>
        <Map zoom={9} center={position} mapId={mapsID}>
          <AdvancedMarker position={position}></AdvancedMarker>
        </Map>
      </div>
      
    </APIProvider>
  )
}

export default App
