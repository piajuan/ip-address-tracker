import { useState } from "react"
import LeafletMap from "./components/LeafletMap"
import SearchField from "./components/SearchField"
import SearchResult from "./components/SearchResult"
import { useQuery } from "@tanstack/react-query"
import Axios from "axios"

const App = () => {
  const [IPAddress, setIPAddress] = useState('')

  const geoAPILink = `https://geo.ipify.org/api/v2/country?apiKey=at_wW2VJRvYUNGEJbEuzYd2Zor5oyxUm&ipAddress=${IPAddress}`
  const {
     data: ipData,
     isError,
     isLoading,
     isSuccess,
     refetch
    } = useQuery(["ipQuery"], () => {return Axios.get(geoAPILink).then((res) => res.data)});

  function handleChange ({target}) {
    setIPAddress(target.value);
  }

  function onClick(event) {
    event?.preventDefault();
    refetch();
  }

  return (
      <main className="flex flex-col h-screen">
        <div className={`w-full h-[296px] md:h-[282px] bg-cover bg-mobile md:bg-desktop`}></div>
        <LeafletMap/>

        <div className="absolute top-0 left-0 w-full p-4 md:p-10 flex flex-col gap-8">
          <h1 className="text-white text-center text-3xl">Ip Address Tracker</h1>

          <SearchField 
            value={IPAddress} 
            onChange={handleChange} 
            onClick={onClick} 
            placeholder="Search for any IP address or domain"
          
          />
          
          <SearchResult 
            ipData={ipData} 
            isError={isError} 
            isLoading={isLoading} 
            isSuccess={isSuccess}
          />
        </div>
      </main>
  )
}

export default App