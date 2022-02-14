import React, {useState} from "react"
import IpInput from "../components/IpInput"
import Results from "../components/Results"
import './Home.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
}
  
const center = {
    lat: -3.745,
    lng: -38.523
}

const Home = () => {

    const [ipAddress, setIpAddress] = useState("192.212.174.101")
    const [location, setLocation] = useState("Brooklyn, NY 10001")
    const [timezone, setTimezone] = useState("UTC -05:00")
    const [isp, setIsp] = useState("SpaceX Starlink")
    const [map, setMap] = useState(null)
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    console.log(ipAddress)

    

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD_fRRzQJ31fZdOTSrB3vMPmKiBj10FLtw"
    })


    const onChange = (e) => {
        setIpAddress(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        // search api
    }
    return(
        <div className="home-div">
            <div className="blue-background d-flex flex-row justify-content-center">
                <div className="info-container d-flex flex-column align-items-center">
                    <div className="page-title my-3">
                        IP Address Tracker
                    </div>
                    <div className="ip-input-div mb-1">
                        <IpInput onClick={onSubmit} onChange={onChange} value={ipAddress}/>
                    </div>
                    <div className="results-div mb-3">
                        <Results ipAddress={ipAddress} location={location} timezone={timezone} isp={isp}/>

                    </div>
                </div>
                
            </div>
            <div className="map-div d-flex flex-column align-items-center justify-content-center">
                { isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        { /* Child components, such as markers, info windows, etc. */ }
                        <></>
                    </GoogleMap>
                ) : <></>
                }
            </div>
            

        </div>
    )
}

export default Home