
export default function Hero() {
  
    return (
        <>
            <div className=" relative z-20 max-w-[90%] grid grid-cols-2 mx-auto p-4 rounded-[1rem] shadow-lg shadow-gray-400 overflow-hidden text-white">
                <div className='relative z-20 p-4 col-span-1' >
                    <div>
                        <img id="weather_status" src='src/assets/weather_status/weather_clouds.svg' className='w-16 filter invert'  alt="" />
                    </div>
                    <h1 id="weather_temp" className="text-[6rem] mt-[-2rem] ml-2 ">
                        23
                    </h1>
                    <p id="weather_location" className='text-lg ml-2'>
                        weather_location
                    </p>
                    <p id="weather_country" className="ml-2">
                        country_country
                    </p>
                </div>

                <div className='col-span-1 flex flex-col justify-end p-4 text-right z-20 '>
                    <h5 id="weather_timezone">weather_timezone</h5>
                    <p id="weather_time">weather_time</p>
                </div>
                <div>
                    <img className="w-full h-full absolute z-0 top-0 left-0 opacity-30 brightness-75 object-cover object-center" id="weather_bg" src={wbgClouds} alt="" />
                </div>
            </div>
            
            
        </>
    )
}



