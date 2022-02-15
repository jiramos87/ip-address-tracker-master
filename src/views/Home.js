import React, {useState} from "react"
import IpInput from "../components/IpInput"
import Results from "../components/Results"
import './Home.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
}

const Home = () => {

    const [ipAddress, setIpAddress] = useState("192.212.174.101")
    const [lat, setLat] = useState(-3.745)
    const [lng, setLng] = useState(-38.523)
    const [center, setCenter] = useState({
        lat: lat,
        lng: lng
    })
    const [country, setCountry] = useState("US")
    const [region, setRegion] = useState("NY")
    const [city, setCity] = useState("Brooklyn")
    const [postalCode, setPostalCode] = useState("10001")
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

    const geoipifyKey = 'at_2Wg6EhI795hT1TIZrQpFv1qh3w3Gw'

    const getCenter = async (ip) => {
        await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_2Wg6EhI795hT1TIZrQpFv1qh3w3Gw&ipAddress=${ip}`, { method: 'GET'})
        .then(response => response.json())
        .then((data) => {
            setCenter({lat: data.location.lat, lng: data.location.lng})
            setCountry(data.location.country)
            setRegion(data.location.region)
            setCity(data.location.city)
            setPostalCode(data.location.postalCode)
            setTimezone(data.location.timezone)
            setIsp(data.isp)
        })
        console.log(center)
    }
    const onChange = (e) => {
        setIpAddress(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        getCenter(ipAddress)
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
                        <Results ipAddress={ipAddress} location={`${region}, ${city} ${postalCode} ${country}`} timezone={timezone} isp={isp}/>

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