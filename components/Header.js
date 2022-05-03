import React from 'react'
import Link from 'next/link'

// component
import Sidebar from './Sidebar'
import RightSidebar from './RightSidebar'

const Header = () => {
    const [openLeftSidebar, setOpenLeftSidebar] = React.useState(false)
    const [openRightSidebar, setOpenRightSidebar] = React.useState(false)

    const handleClickRightSidebar = () => {
        setOpenRightSidebar(false)
    }
    const handleClickLefttSidebar = () => {
        setOpenLeftSidebar(false)
    }
    const handleFavorite = () => {
        alert('Bookmark this page by pressing CTRL + D (or Command + D on Macs) on your keyboard. ❤️')
    }
    return (
      <>

      <Sidebar handleClick={handleClickLefttSidebar} open={openLeftSidebar} />
      <RightSidebar handleClick={handleClickRightSidebar} open={openRightSidebar} />
        <div className='flex justify-between items-center w-screen px-4'>
            <Link href="/">
                <a className='hidden w-24 h-16 bg-[url("/images/logo.png")] bg-contain bg-no-repeat bg-center laptop:block'/>
            </Link>

            <button 
            aria-label='hamburger menu'
            type='button' 
            onClick={() => setOpenLeftSidebar(true)} 
            className='w-5 h-4 flex flex-col justify-between laptop:hidden' >
                <div className='bg-black w-full h-[3px] rounded-md'></div>
                <div className='bg-black w-full h-[3px] rounded-md'></div>
                <div className='bg-black w-full h-[3px] rounded-md'></div>
            </button>

            <div className='hidden justify-between w-[50%] laptop:flex'>
                <Link href="/search/mp3paw">
                    <a className='font-bold'>MP3PAW</a>
                </Link>
                <Link href="/search/mp3juices">
                    <a className='font-bold'>MP3JUICES</a>
                </Link>
                <Link href="/search/tubidy">
                    <a className='font-bold'>TUBIDY</a>
                </Link>
                <Link href="/search/y2mate">
                    <a className='font-bold'>Y2MATE</a>
                </Link>
                <Link href="/search/savefrom">
                    <a className='font-bold'>SAVEFROM</a>
                </Link>
            </div>
            <Link href="/">
                <a className='w-32 h-12 bg-[url("/images/logo.png")] bg-contain bg-no-repeat bg-center laptop:hidden'/>
            </Link>
            <div className='flex items-center'>
                <button 
                type='button' 
                onClick={handleFavorite} 
                className='hidden pr-4 items-center mobile:flex'>
                    <div className='w-8 h-8 bg-[url("/images/ic_star.png")] bg-contain bg-no-repeat bg-center'></div>
                    <span className='font-bold pl-2'>Add to Favorites</span>
                </button>
                <button 
                aria-label='manage language'
                type='button' onClick={() => setOpenRightSidebar(true)}  
                className='w-8 h-8 bg-[url("/images/ic_language.png")] bg-contain bg-no-repeat bg-center'>

                </button>
            </div>
        </div>
    </>
  )
}

export default Header