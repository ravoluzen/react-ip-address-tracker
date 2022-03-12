import React from 'react'

const DetailsIP = ({ ipAddress, location, timezone, isp}) => {
  return (
    <div 
    className='bg-white w-4/5 h-auto rounded-xl shadow-lg p-4 mt-32 lg:mt-48 md:mt-48 md:px-10, mt lg:px-8 absolute z-10 flex flex-col justify-between items-center lg:items-start md:items-start lg:flex-row md:flex-row'>
        <section className='md:w-1/4 lg:w-1/4'>
            <p className='text-xs text-slate-400 font-medium md:mt-0 md:text-left lg:text-left lg:text-sm'>IP ADDRESS</p>
            <h2 className='text-lg text-black font-medium md:mt-4 lg:mt-4 md:text-left lg:text-left lg:text-2xl'>{ipAddress}</h2>
        </section>
        <section className='md:w-1/4 lg:w-1/4'>
            <p className='text-xs text-slate-400 font-medium mt-4 md:mt-0 md:text-left lg:text-left lg:text-sm'>LOCATION</p>
            <h2 className='text-lg text-black font-medium md:mt-4 lg:mt-4 md:text-left lg:text-left lg:text-2xl'>{location}</h2>
        </section>
        <section className='md:w-1/4 lg:w-1/4'>
            <p className='text-xs text-slate-400 font-medium mt-4 md:mt-0 text-left lg:text-sm'>TIMEZONE</p>
            <h2 className='text-lg text-black font-medium md:mt-4 lg:mt-4 md:text-left lg:text-left lg:text-2xl'>{timezone}</h2>
        </section>
        <section className='md:w-1/4 lg:w-1/4'>
            <p className='text-xs text-slate-400 font-medium mt-4 md:mt-0 md:text-left lg:text-left lg:text-sm'>ISP</p>
            <h2 className='text-lg text-black font-medium md:mt-4 lg:mt-4 md:text-left lg:text-left lg:text-2xl'>{isp}</h2>
        </section>
    </div>
  )
}

export default DetailsIP