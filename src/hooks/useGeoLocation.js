import { useState, useEffect } from "react";

const useGeoLocation = () => {

    const [location, setLocation] = useState(null)

    const getGeoLocation = () => {

        if ("geolocation" in navigator) {

            navigator.geolocation.getCurrentPosition(function(position) {
        
            setLocation({lat: position.coords.latitude, lon: position.coords.longitude})
             
        });

        } else {
        console.log("no geolocation available")
        }

        return location

    }

    useEffect(() => {
        if(location === null) {
            getGeoLocation()   
        }
      }, [])

    return { location, getGeoLocation }
}

export default useGeoLocation