const SearchResult = ({ipData, isError, isLoading, isSuccess}) => {

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

    console.log(ipDataInfo)
    const ipDataElements = ipDataInfo.map((info, i) => {
        return (
            <div key={i} className="flex-auto flex flex-col p-5 px-6 gap-2 relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:translate-y-[-50%] after:h-3/5 after:w-[1px] md:after:bg-darkGray/30 last:after:hidden">
                <span className="text-darkGray/90 uppercase text-xs font-bold">{info.label}</span>
                <span className="text-2xl">{info.data}</span>
            </div>
        )
    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-lg mx-auto py-2 px-3 rounded-2xl bg-white shadow-xl'>
            { isLoading && <span> still loading </span> }
            { isError && <span> Failure to fetch data </span> }
            { isSuccess && ipDataElements}
        </div>
    )
}

export default SearchResult