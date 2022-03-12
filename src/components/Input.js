import React from 'react'
import arrow from '../images/icon-arrow.svg'

const Input = ({setInputValue, inputForm, inputValue, getIpDetails}) => {
  return (
    <div className='flex items-center justify-center w-5/6 mt-3 lg:mt-8 md:mt-8'>

        <input 
          ref={inputForm}
          placeholder='Search for any IP or domain'
          value={inputValue}
          className='p-3 rounded-l-xl shadow w-5/6 lg:w-2/5 '>
        </input>

        <button
        onClick={getIpDetails}
        className='p-5 bg-black rounded-r-xl w-12'>
          <img src={arrow} alt="arrow icon"></img>
        </button>
    </div>
  )
}

export default Input