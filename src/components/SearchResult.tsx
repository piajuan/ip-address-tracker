import { Player } from "@lottiefiles/react-lottie-player"
import searchMap from "../assets/searching-map.json"

const SearchResult = ({ipData, isLoading, isFetching, isError, ipAddress}) => {

    const ipDataInfo = [
        {
            label: 'IP Address',
            data: ipData?.ip
        },
        {
            label: 'Location',
            data: `${ipData?.location.region},${ipData?.location.country}`
        },
        {
            label: 'Timezone',
            data: ipData?.location.timezone,
        },
        {
            label: 'ISP',
            data: ipData?.isp
        },
    ]

    const ipDataElements = ipDataInfo.map((info, i) => {
        return (
            <div key={i} className="flex-auto flex flex-col md:p-5 px-6 gap-1 md:gap-2 relative text-center md:text-left after:content-[''] after:absolute after:right-0 after:top-1/2 after:translate-y-[-50%] after:h-3/5 after:w-[1px] lg:after:bg-darkGray/30 last:after:hidden">
                <span className="text-darkGray/90 uppercase text-[0.7rem] md:text-xs font-bold tracking-widest">{info.label}</span>
                <span className="break-all text-xl font-medium">{info.data}</span>
            </div>
        )
    })

    if (isLoading || isFetching) {
        return (
            <div className="mx-auto max-w-lg pt-[8rem]">
                <Player autoplay loop src={searchMap} style={{margin: "1rem auto", width: "150px",}}></Player> 
                <h3 className="text-center opacity-50">Searching for {ipAddress}...</h3>
            </div>
        ) 
    }

    if (isError) {
        return <></>
    }

    return (
        <div className='z-[999]'>
            <div className="w-full max-w-screen-lg mx-auto py-6 lg:py-2 px-3 rounded-2xl bg-white shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {ipDataElements} </div>
        </div>
    )
}

export default SearchResult