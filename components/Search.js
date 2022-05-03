import React, { useRef } from 'react'
import Router from 'next/router'

const Search = () => {
    const inputRef = useRef()

    const handleSubmit = async (event) => { 
        event.preventDefault()
        Router.push(`/search/${inputRef.current.value}`)
    }

  return (
      <div className='flex flex-col py-4 bg-[url("/images/bg_top_v2.png")] bg-[#fafbfc] bg-contain bg-repeat bg-center'>
        <div className='flex items-center justify-center'>
          <h4 className='font-bold text-center text-[26px] text-[#202020] my-[10px] mx-[25px]'>Download Music and Videos from YouTube Online</h4>
        </div>
        <form 
        className='flex m-4 shadow-md rounded-lg overflow-hidden border-2 border-yellow-500' 
        onSubmit={handleSubmit}>
                <input
                className='p-3 w-full outline-0'
                placeholder='Paste YouTube link or enter keyword here' 
                type='text' 
                ref={inputRef} />
                <button
                className='bg-yellow-400 text-black font-bold py-2 px-6' 
                type='submit'>Search</button>
        </form>
      </div>
  )
}

export default Search