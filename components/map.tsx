import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api"
import useLocationStore from "./store/locationStore";

const containerStyle = {
  width: '50%',
  height: '100%'
};

const center = {
  lat: 0,
  lng: 0
}

const Map = () => {
  const locations = useLocationStore((state) => state.locations)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string
  })

  return isLoaded ? (
    <div className='h-screen w-screen'>
      <GoogleMap center={center} zoom={1.7} mapContainerStyle={containerStyle} mapTypeId="satellite" options={{disableDefaultUI:true, zoomControl:false}}>
        {
          locations.map((location,idx) => {
            return (
              <MarkerF position={location.coordinates} key={idx} options={{icon: {url:'https://www.clker.com/cliparts/L/8/D/F/T/V/orange-pin-maps.svg.thumb.png', scaledSize: new google.maps.Size(20,35)}}}/>
            )
          })
        }
      </GoogleMap>
    </div>
  ) : <></>
}

export default Map
