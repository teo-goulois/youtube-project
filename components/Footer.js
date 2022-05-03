import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#202020] p-4 w-full h-full text-white flex flex-col'>
        <div className='laptop:flex laptop:justify-between'>
            <>
            {links.map((link) => (
                <div key={link.name} className='hover:text-[#e64a3b] px-[15px] py-[20px] border-b-2 border-[#333] w-full 
                flex justify-between items-center laptop:border-0'>
                    <a href={link.url} >{link.name}</a>
                    <div className='w-6 h-6 border-t-4 border-r-4 border-white rotate-45 laptop:hidden'/>
                </div>
            ) )}
            </>
        </div>
        

        <p className='text-center text-[#dcdfe4] py-4'>Copyright © 2021 Snappea</p>
        <div className='flex items-center w-full pb-12 justify-center text-[#dcdfe4] '>
            <a 
            href='#' target='_blank' 
            rel='noopener noreferrer' 
            className='hover:text-[#e64a3b] '>
                Politica de Cookies
            </a>
            <span>&nbsp; |&nbsp; </span>
            <a 
            href='#' target='_blank' 
            rel='noopener noreferrer' 
            className='hover:text-[#e64a3b]'>
                DMCA
            </a>
            <span> &nbsp; |&nbsp; </span>
            <a 
            href='#' target='_blank' 
            rel='noopener noreferrer' 
            className='hover:text-[#e64a3b]'>
                TOS
            </a>
        </div>
    </footer>  
  )
}

export default Footer;

const links = [
    {name: 'Youtube A MP3', url: '/search/youtube-a-mp3'},
    {name: 'Youtube A MP4', url: '/search/youtube-a-mp4'},
    {name: 'Converter Youtube', url: '/search/converter-youtube'},
    {name: 'Download Music Youtube', url: '/search/download-music-youtube'},
    {name: 'Download Youtube', url: '/search/download-youtube'},
    {name: 'Download Mp3 Youtube', url: '/search/download-mp3-youtube'},
]