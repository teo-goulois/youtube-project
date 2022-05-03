/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
// carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const WatchId = () => {
  const router = useRouter()
  const { id } = router.query

  const [datas, setDatas] = useState()
  const [openVideo, setOpenVidep] = useState()
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    const fecthData = async () => {
      const res = await fetch(`/api/watch?id=${id}`)
      const { data } = await res.json()
      setDatas(data)
    }

    id && fecthData()

  }, [id]);

  return (
    <div >
      <div className='flex flex-col items-center w-full'>
        <h1 className='font-bold'>{datas?.videoDetails.title}</h1>
        <div className='overflow-hidden pt-[56.25%] relative w-[90%]'>
          { 
            !loaded &&
            <div className='flex justify-center w-full h-full absolute top-0'>
              <Image src="/images/loading.svg" layout='fill' alt='loading'/> 
            </div>
          }
           <iframe
          onLoad={() => setLoaded(true)}
          width={'100%'}
          height={'100%'}
          className={`absolute top-0 left-0 w-full h-full ${!loaded ? 'hidden' : ''}`}
          src={`https://www.youtube.com/embed/${id}`}>
          </iframe>
        </div>
      </div>
      <div className='p-4'>
        <div className='bg-slate-200 w-[90%] h-px border-2-px border-black ml-[auto] mr-[auto] my-4'></div>
        <Swiper
        className='pb-2'
          modules={[Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
        >
          {datas?.related_videos.map((item) => {
            return (
                <SwiperSlide  key={item.id} >
                  <Link href={`/watch/${item.id}`} passHref>
                    <h2 className='font-bold truncate cursor-pointer'>{item.title}</h2>
                  </Link>
                  
                  {openVideo === item.id ?
                    <div className='overflow-hidden pt-[56.25%] relative'>
                      <iframe
                      onLoad={() => console.log('loaded')}
                      width={'100%'}
                      height={'100%'}
                      className='absolute top-0 left-0 w-full h-full'
                      src={`https://www.youtube.com/embed/${item.id}`}>
                      </iframe> 
                    </div>
                    : 
                    <div className='overflow-hidden pt-[56.25%] relative'>
                        <img
                        className='absolute top-0 left-0 w-full h-full'
                        onClick={() => setOpenVidep(item.id)}
                        alt={item.title}
                        src={item.thumbnails[0].url} /> 
                    </div>
                  }
                </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default WatchId