import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Search from '../../components/Search'
import ListenedArtists from '../../components/ListenedArtists'

const SearchId = ({  }) => {
    const router = useRouter()
    const { name } = router.query

    const [content, setContent] = useState()

    const fecthData = async () => {
        console.log('fecth data');
        const res = await fetch(`/api/youtube?q=${name}`)
        const { data } = await res.json()
        console.log(data, 'data arrived');
        setContent(data)
    }
   

    const downloadData = async (event, item) => {
      event.preventDefault()
      window.location.href = `/api/download?url=${item.url}`
    }

    useEffect(() => {
      if(name !== undefined) {
        console.log('effect', name);
        fecthData()
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ name]);
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Search />
      <section className='p-2'>
        <h1 className='text-[2em] px-[10px] font-bold text-center capitalize'>{`Download ${name?.replace('-', ' ')} MP3 Free`}</h1>
        <p>
        {`Congratulations you can now download ${name?.replace('-', ' ')} MP3 totally free. 
        Below you have many results available to choose from,
        we recommend downloading the first option, which is usually the official song.`}
        </p>
        {content ? content.items.map(item => {
          return (
            <div key={item.id} className='flex justify-between border p-2 border-slate-300'>
              <div className='flex'>
                <div className='w-[48px] h-[36px] bg-black rounded overflow-hidden flex m-2'>
                  <Image 
                  width='48' 
                  height='36'
                  alt={item.title} 
                  src={item.bestThumbnail?.url} />
                </div>
                <div className='pl-2'>
                  <h2 className='font-bold'>{item.title}</h2>
                  <p>size . {item.duration}</p>
                </div>
              </div>
              <div className='flex flex-col laptop:flex-row'>
                <Link href={`/watch/${item.id}`}>
                  <a 
                  className='font-[500] bg-[#ffcf2a] rounded-lg px-4 py-2 mb-1 h-full laptop:mr-2'>
                    play
                  </a>
                </Link>
                <button 
                onClick={(event) => downloadData(event, item)}
                className='font-[500] bg-[#ffcf2a] rounded-lg px-4 py-2 flex items-center'>
                  <Image 
                  className='pr-2' 
                  width='20px' 
                  height='20px' 
                  alt='download image' 
                  src='/images/ic_download-icon.png' />
                  download
                </button>
              </div>
            </div>
          )
        })
        : 
        <div className='flex justify-center w-full'>
          <Image  src="/images/loading.svg" height={200} width={200} alt='loading'/> 
        </div>
        
        }
        
        <p>
        {`Download MP3 ${name?.replace('-', ' ')} 2021, exclusively for you, you can listen to music online and 
        download MP3 easily and quickly. We recommend that you listen to this music: 
        Feid Vacaxiones, you can also Download MP3 audio for free, and if you still don't 
        know how to download MP3 music you can see the instructions at the bottom of this 
        MP3 page. Now you can download MP3 ${name?.replace('-', ' ')} for free and in the highest quality 192 
        kbps, this list of online songs contains search results that were previously selected 
        for you, here you will get the best songs and videos that are in fashion in this 2020, 
        you can download MP3 music ${name?.replace('-', ' ')} in various audio formats 
        like MP3, WMA, iTunes, M4A, ACC.`}
        </p>
      </section>
      {/* <LastSearch /> */}
      <ListenedArtists />
    </>
  )
}

export default SearchId
