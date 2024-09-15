import './App.css'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps'

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  

  return (
    <APIProvider apiKey={apiKey}>
      <h1>test</h1>
    </APIProvider>
  )
}

export default App
