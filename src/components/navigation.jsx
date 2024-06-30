import React from 'react'
import Cloud from '../assets/cloud.svg'
import { getWeather } from '../index.js'
import { useRef } from 'react'


export default function Navigation() {
    const myRef = useRef(null);
    return (
        <>
            <div>
                <div className='flex max-w-[90%] mx-auto justify-between items-center p-4 max-xl:flex-col'>

                    <div className='flex items-center text-2xl font-bold text-[var(--baseColor)] my-3 max-xl:hidden'>
                        <h1>Daily Weather</h1>
                    </div>

                    <div className='flex mx-auto my-3 xl:hidden '>
                        <img src={Cloud} alt="cloud" className='w-10' />
                    </div>

                    <div className='flex items-center gap-2 bg-white px-4 rounded-lg border-2 max-xl:w-full max-md:gap-0 max-md:px-2'>

                        <label className='max-xl:w-full' name="search_box">
                            <input  type="text" ref={myRef} id="search" placeholder="Enter city name..." />
                        </label>
                        
                        <button id='searchBtn' onClick={() => getWeather(myRef.current.value)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>

        </>
    )

}

