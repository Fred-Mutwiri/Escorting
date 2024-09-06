import React from 'react'

import NavCard from "@/components/cards/navCard";
import Postcard from "@/components/cards/PostCard";
import PostFormCard from "@/components/forms/PostFormCard";
import Image from "next/image";
import Pcard from '@/components/cards/pCard';
import Avatar from '@/components/cards/avatar';
import Card from '@/components/cards/card';

function Profile() {
  return (
    <div>
          <Pcard>
            <div className='h-40 overflow-hidden rounded-t-md flex justify-center items-center'>
              <Image src={'/photos/cub.jpeg'} alt='picture' width={450} height={100}
                  className='w-full '
              />
            </div>
            <div className=' flex  gap-5 items-center p-4'>
              <Avatar />

              <div className='flex flex-col gap-0'>
                <p className=' font-bold capitalize text-2xl text-rose-900 '>@emmami</p>
                <p className='font-semibold text-amber-700'>available in Kitui Town</p>
                <p className='text-center font-semibold text-md text-red-500'> offering both premium and deluxe services, with Massage</p>
              </div>
            </div>
          </Pcard>

          <Card>
            <div>
              <h2 className='text-center font-semibold text-rose-950'>Photos</h2>
            </div>

            <div className='flex flex-wrap gap-1 justify-center '>
              <div className=''>
                <Image src={'/photos/a.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/photos/lion.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/assets/1.jpg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/assets/2.jpg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/assets/3.jpg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/assets/4.jpg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/photos/a.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/photos/b.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/photos/c.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/photos/d.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/photos/e.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/photos/f.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/photos/g.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/photos/h.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/photos/i.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/photos/j.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/photos/k.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
              <div className=''>
                <Image src={'/photos/d.jpeg'} alt='picture' width={200} height={100} className=' object-cover aspect-square '/>
              </div>
            </div>

          </Card>
    </div>
  )
}

export default Profile

