import React from 'react'
import Humidity from '../assets/info_status/humidity.svg'
import WindSpeed from '../assets/info_status/wind_speed.svg'
import MaxTemp from '../assets/info_status/temp_max.svg'
import MinTemp from '../assets/info_status/temp_min.svg'
import Lat from '../assets/info_status/lat.svg'
import Lon from '../assets/info_status/lon.svg'
import Pressure from '../assets/info_status/pres.svg'


export default function Info() {
    return (
        <>
            <div className="w-[55%] grid grid-rows-3 mx-auto mt-[3rem] gap-7 max-sm:flex-col max-sm:flex max-sm:mt-[2] max-sm:w-[90%] max-lg:w-[90%]">

                <div className="w-full flex justify-between items-center row-span-1 border-2 border-gray-400 rounded-xl p-4  max-xl:flex-col max-xl:items-start max-lg:flex-row max-lg:justify-between max-lg:gap-7 max-sm:gap-2">

                    <div className="flex flex-col gap-3 max-lg:flex-row max-md:justify-evenly max-lg:justify-between  max-lg:w-full max-sm:w-full">

                        <div className="flex items-center gap-3 max-md:flex-col ">
                            <img className='w-[3rem]' src={Humidity} />
                            <div className="text-left max-md:text-center">
                                <h4 className="text-sm font-semibold max-sm:hidden ">Humidity</h4>
                                <p id="weather_humidity">weather_humidity</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 max-md:flex-col">
                            <img className='w-[3rem]' src={WindSpeed} />
                            <div className="text-left max-md:text-center">
                                <h4 className="text-sm font-semibold max-sm:hidden">Wind Speed</h4>
                                <p id="weather_Wspeed">weather_Wspeed</p>
                            </div>
                        </div>

                    </div>

                    <div className="w-[1px] h-[7rem] bg-gray-400 opacity-60 max-sm:hidden max-xl:hidden max-md:flex"></div>

                    <div className="flex flex-col gap-3 max-xl:mt-2 max-lg:mt-0 max-md:justify-evenly max-sm:mt-0 max-lg:flex-row  max-lg:justify-between  max-lg:w-full">

                        <div className="flex items-center gap-3 max-md:flex-col">
                            <img className='w-[3rem]' src={MinTemp} />
                            <div className="text-left max-md:text-center">
                                <h4 className="text-sm font-semibold max-sm:hidden">Temp Min</h4>
                                <p id="weather_Tmin">weather_Tmin</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 max-md:flex-col">
                            <img className='w-[3rem]' src={MaxTemp} />
                            <div className="text-left max-md:text-center">
                                <h4 className="text-sm font-semibold max-sm:hidden">Temp Max</h4>
                                <p id="weather_Tmax">weather_Tmax</p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="flex row-span-1 border-2 border-gray-400 rounded-xl p-3 w-full justify-evenly items-center gap-4 max-sm:justify-evenly max-lg:flex-row max-xl:flex-col max-xl:items-start">

                    <div className="flex flex-col items-center gap-3 max-sm:flex-col max-md:flex-col max-xl:flex-row">
                        <img className='w-[3rem]' src={Lat} />
                        <div className="text-center">
                            <h4 className="text-sm font-semibold max-sm:hidden ">Latitude</h4>
                            <p id="weather_lat">weather_lat</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 max-sm:flex-col max-md:flex-col max-xl:flex-row">
                        <img className='w-[3rem]' src={Lon} />
                        <div className="text-center">
                            <h4 className="text-sm font-semibold max-sm:hidden ">Longitude</h4>
                            <p id="weather_lon">weather_lon</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 max-sm:flex-col max-md:flex-col max-xl:flex-row">
                        <img className='w-[3rem]' src={Pressure} />
                        <div className="text-center">
                            <h4 className="text-sm font-semibold max-sm:hidden ">Pressure</h4>
                            <p id="weather_pre">weather_pre</p>
                        </div>
                    </div>

                </div>

                <div className="relative z-10 overflow-hidden row-span-1 text-white">
                    <div className="relative z-10 flex flex-col items-left w-full rounded-xl p-4 shadow-lg ">
                        <h4 id="weather_name" className="z-10 text-md font-semibold">Rain</h4>
                        <p id="weather_des" className="z-10">weather_des</p>

                        <div className="absolute z-0 w-full h-full  bg-gradient-to-r from-sky-200 to-[#eef1fe] brightness-90 top-0 left-0 rounded-xl"></div>
                    </div>

                </div>

            </div>
        </>
    )
}