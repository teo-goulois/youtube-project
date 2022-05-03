import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ListenedArtists = () => {
  return (
    <>
    <h2 className='text-[15px] font-bold'>Most listened to artists</h2>
          <div className='w-full flex flex-wrap items-center justify-center text-center list-none box-content'>
              {artists.map((artist) => (
              <div key={artist.name} className='flex shrink basis-[25%] m-0 p-0 '>
                <Link href={`/search/${encodeURIComponent(artist.image.split(".")[0].split('/')[2])}`}>
                <a className='text-[.8em] text-[#2d2d2d] hover:text-[#e64a3b]'>
                  <figure className='p-4 min-w-[150px] min-h-[150px]'>
                    <Image 
                    loading='eager'
                    width='100' 
                    height='100' 
                    className='rounded-full' 
                    src={artist.image} 
                    alt={artist.name} />
                  </figure>
                  <b>{artist.name}</b>
                </a>
                </Link>
                
              </div>
              ))}
          </div>

        <p className='py-2'>
            At <b>Snappea</b>  we use <b>YouTube Data API technology</b>  for our 
            search engine, we do NOT support music piracy, it is 
            also clear that no mp3 files are hosted on our server, 
            they are hosted on different public internet sites and we 
            have no relationship whatsoever .</p>
    </>
  )
}

export default ListenedArtists



const artists = [
    {name: 'Bad Bunny', image: '/images/bad-bunny.jpg'},
    {name: 'Ozuna', image: '/images/ozuna.jpg'},
    {name: 'Daddy Yankee', image: '/images/daddy-yankee.jpg'},
    {name: 'J Balvin', image: '/images/j-balvin.jpg'},
    {name: 'Ariana Grande', image: '/images/ariana-grande.jpg'},
    {name: 'Sebastian Yatra', image: '/images/sebastian-yatra.jpg'},
    {name: 'Dua Lipa', image: '/images/dua-lipa.jpg'},
    {name: 'Avicii', image: '/images/avicii.jpg'},
    {name: 'Paulo Londra', image: '/images/paulo-londra.jpg'},
    {name: 'Shakira', image: '/images/shakira.jpg'},
    {name: 'Nicky Jam', image: '/images/nicky-jam.jpg'},
    {name: 'Maluma', image: '/images/maluma.jpg'},
  ]