export default function Days() {
    return (
        <>
            <div className="w-[85%] mx-auto ">
                <div className="max-lg:hidden">

                    <div className="w-full flex justify-evenly items-center  rounded-xl mt-[3rem] max-xl:flex-col  max-xl:gap-5">

                        <div className="w-[40%] h-[43vh] flex flex-col justify-center items-center p-5 rounded-2xl shadow-2xl max-xl:w-[90%]">

                            <div className="flex gap-3 justify-center items-center">
                                <img id="days1_status" src="./src/assets/days_status/days_mist.svg" className='w-16 ' alt="" />
                                <h3 id="days1_temp" className="text-6xl">32°</h3>
                            </div>
                            <p id="days1_location" className='text-xl ml-2'>
                                location
                            </p>
                            <h5 id="days1_timezone" className="text-lg">8:00 PM</h5>

                        </div>

                        <div className=" relative z-10 w-[40%] h-[43vh] flex flex-col justify-between p-5 rounded-2xl shadow-2xl text-white max-xl:w-[90%]">

                            <div className="z-10 flex flex-col gap-3 items-start">
                                <h3 id="days2_temp" className="text-4xl">32°</h3>
                                <h3 id="days2_status" className="text-4xl">Cloudy</h3>
                            </div>

                            <div className="z-10 flex flex-col gap-3 items-end">
                                <p id="days2_location" className='text-xl ml-2'>
                                    location
                                </p>
                                <h5 id="days2_timezone" className="text-lg">8:00 PM</h5>
                            </div>

                            <div className="absolute z-0 w-full h-full  bg-gradient-to-r from-sky-200 to-[#eef1fe] brightness-70 contrast-75 top-0 left-0 rounded-xl"></div>

                        </div>


                    </div>

                    <div className="mx-auto my-5 h-full flex justify-between gap-3 border-2 border-gray-500 rounded-xl p-4 mt-[2rem] " >

                        <div className="flex flex-col justify-start items-center">

                            <div className='relative z-20 p-4' >
                                <div>
                                    <img id="days3_status" src="./src/assets/days_status/days_sunny.svg" className='w-10' alt="" />
                                </div>
                                <h1 id="days3_temp" className="text-[2rem] mt-[-8px] ml-2 ">
                                    23°
                                </h1>
                                <p id="days3_location" className='text-md ml-2'>
                                    weather_location
                                </p>
                            </div>

                        </div>

                        <div className="flex justify-end items-end">

                            <div className='flex flex-col justify-end p-4 text-right text-md z-20 '>
                                <h5 id="days3_timezone">weather_timezone</h5>
                                <p id="days3_time">weather_time</p>
                            </div>

                        </div>


                    </div>

                </div>

                {/* LG View */}
                <div className="hidden my-6 max-lg:block">

                    <div className="flex justify-evenly items-center mx-auto ">
                        <div className="h-[1px] w-[40%] border-2 border-gray-400 opacity-15"></div>
                        <img src="./src/assets/cloud.svg " alt="cloud" className='w-10' />
                        <div className="h-[1px] w-[40%] border-2 border-gray-400 opacity-15"></div>
                    </div>

                    <div className=" relative z-10 flex mx-auto my-3 h-full  items-center justify-center gap-3 rounded-xl overflow-hidden p-4 mt-[2rem] shadow-xl" >

                        <div className="flex justify-between items-center">
                            <div>
                                <h4 id="days4_country" className=" text-sm font-bold">PH</h4>
                            </div>

                            <div>
                                <img id="days4_status" className='w-[2rem]' src="./src/assets/info_status/humidity.svg" alt="humidity" />
                            </div>

                            <div>
                                <h1 id="days4_temp" className="text-sm font-bold ">
                                    23°
                                </h1>
                            </div>
                        </div>
                        <div>
                            <img className="w-full h-full absolute z-0 top-0 left-0 opacity-30 brightness-75 object-cover object-center" id="days_bg" src="./src/assets/weather_bg/wbg_clouds.jpg  " alt="" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    )

}