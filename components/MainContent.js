import React from 'react'
// components 
import ListenedArtists from './ListenedArtists'

const MainContent = () => {
  return (
    <div className='flex flex-col w-full p-4'>
        <h1 className='font-bold text-center text-[2em] py-4'>Snappea- Download Free MP3 Music</h1>
        <p className='py-2'>Download music if you are a great lover of songs and you like to
        listen to your favorite songs from your mobile device, 
        but you do not know which is the best page to <b>download music</b>  for 
        free easily and quickly, then let me tell you that <b>Snappea</b>  is the 
        best website of <b>mp3 music</b>  from all over the net, <b>Snappea</b>  is the 
        best <b>mp3 search engine</b> . Here we offer you the best hits, 
        most listened songs and <b>new music</b>  2021.</p>
        <h2 className='font-bold text-center text-[1.5em] py-2'>TOP Most downloaded music on Snappea</h2>

        <div className='flex flex-col pl-4 text-[#333] py-4 font-bold'>
            <h3 className='text-[20px]'>🔥 Popularity list</h3>
            <p className='text-[14px]'>Weekly most downloaded videos</p>
        </div>

        <p className='py-2'>
        <b>Snappea</b>  is the best site to <b>download music</b>  completely free as 
        well as downloading videos from YouTube very easily. 
        What makes our website interesting is the very easy-to-use 
        interface, to <b>download music</b>  we just have to write the name of 
        the song, album or artist in the search bar, all the songs 
        related to the search we have made will appear. , 
        we will have the possibility to listen to check if it is 
        actually the song we want, and also check the audio quality 
        if we are satisfied with what we are looking for, press the 
        download option to download the song. Then the available options 
        will appear divided into audio and video with their respective 
        format, quality and file size, we click on the option we want 
        and the download will begin if the song is not very long, they 
        will be able to download it in a matter of seconds.
        </p>

        <ListenedArtists />
    </div>
  )
}

export default MainContent
