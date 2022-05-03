import React from 'react'

const Sidebar = ({ handleClick, open }) => {
    
  return (
    <>
        { open && (
            <>
            <div onClick={handleClick} className='fixed w-screen h-screen bg-slate-500 opacity-25 z-10'></div>
            <div className='flex flex-col fixed bg-white left-0 h-screen z-20'>
                <button className='py-5 px-16 border-b-[1px] hover:text-[#e64a3b]'>MP3PAW</button>
                <button className='py-5 px-16 border-b-[1px] hover:text-[#e64a3b]'>MP3JUICES</button>
                <button className='py-5 px-16 border-b-[1px] hover:text-[#e64a3b]'>TUBIDY</button>
                <button className='py-5 px-16 border-b-[1px] hover:text-[#e64a3b]'>Y2MATE</button>
                <button className='py-5 px-16 border-b-[1px] hover:text-[#e64a3b]'>SAVEFROM</button>
                <button className='py-5 px-16 border-b-[1px] hover:text-[#e64a3b]'>GENTEFLOW</button>
                <button className='py-5 px-16 border-b-[1px] hover:text-[#e64a3b]'>BEEMP3</button>
                <button className='py-5 px-16 border-b-[1px] hover:text-[#e64a3b]'>MP3SKULL</button>
            </div>
            </>)
        }
    </>
  )
}

export default Sidebar