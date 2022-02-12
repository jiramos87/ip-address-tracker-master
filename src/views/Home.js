import React, {useState} from "react"
import IpInput from "../components/IpInput"



const Home = () => {

    const [ipAddress, setIpAddress] = useState("192.212.174.101")
    console.log(ipAddress)
    const onChange = (e) => {
        setIpAddress(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        // search api
    }
    return(
        <div className="home-div">
            <div className="blue-background">
                
            </div>
            <div className="map-div">
                    
            </div>
            <div className="controls-div">
                <div className="page-title">
                    IP Address Tracker
                </div>
                <div className="ip-input-div">
                    <IpInput onClick={onSubmit} onChange={onChange} value={ipAddress}/>
                </div>
                <div className="results-div">

                </div>
            </div>

        </div>
    )
}

export default Home