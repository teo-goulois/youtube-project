import React from 'react'

const RightSidebar = ({ handleClick, open}) => {
  return (
    <>
        { open && (
            <>
            <div onClick={handleClick} className='fixed w-screen h-screen bg-slate-500 opacity-0 z-0 '></div>
            <div className='flex flex-col fixed bg-white right-0 h-screen z-10 py-5 px-12 shadow'>
                <button className='text-left py-2 border-b-[1px] border-dotted hover:text-[#e64a3b]'>English(Us)</button>
                <button className='text-left py-2 border-b-[1px] border-dotted hover:text-[#e64a3b]'>Deutsh</button>
                <button className='text-left py-2 border-b-[1px] border-dotted hover:text-[#e64a3b]'>Português</button>
                <button className='text-left py-2 border-b-[1px] border-dotted hover:text-[#e64a3b]'>Español</button>
            </div>
            </>)
        }
    </>
  )
}

export default RightSidebar