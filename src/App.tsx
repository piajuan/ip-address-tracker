import { useState } from "react"
import Map from "./components/Map"
import SearchField from "./components/SearchField"
import SearchResult from "./components/SearchResult"
import { useQuery } from "@tanstack/react-query"
import Axios from "axios"
import { Player } from "@lottiefiles/react-lottie-player";
import loadingMap from "./assets/pinging-map.json"



const App = () => {
  const [IPAddress, setIPAddress] = useState('')
  const [mapKey, setMapKey] = useState(0)

  const geoAPILink = `https://geo.ipify.org/api/v2/country,city?apiKey=at_wW2VJRvYUNGEJbEuzYd2Zor5oyxUm&ipAddress=${IPAddress}`
  const {
     data: ipData,
     isError,
     isLoading,
     isFetching,
     refetch
    } = useQuery(["ipQuery"], () => {return Axios.get(geoAPILink).then((res) => res.data)});

  console.log(ipData)

  function handleChange (e : {target: HTMLInputElement} ) {
    setIPAddress(e.target.value);
  }

  function onClick(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    refetch();

    isLoading && setMapKey(prev => prev + 1)
  }


  return (
      <main className="flex flex-col h-screen">
        <div className={`w-full md:shrink-0 h-[240px] bg-cover bg-mobile md:bg-desktop`} style={{height: isError ? '180px !important' : ''}}></div>
        { isFetching ? <Player autoplay loop src={loadingMap}></Player> : <Map lat={ipData.location.lat} lng={ipData.location.lng} key={mapKey} isError={isError}/>}

        <div className="absolute top-0 left-0 w-full p-4 md:p-10 flex flex-col gap-6 md:gap-8">
          <h1 className="text-white text-center text-2xl md:text-3xl mb-0">Ip Address Tracker</h1>

          <SearchField 
            value={IPAddress} 
            onChange={handleChange} 
            onClick={onClick} 
            placeholder="Search for any IP address or domain"
          />
          
          <SearchResult 
            ipData={ipData} 
            isLoading={isLoading} 
            isFetching={isFetching} 
            isError={isError} 
            ipAddress={IPAddress}
          />
        </div>
      </main>
  )
}

export default App