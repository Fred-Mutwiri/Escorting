import React from 'react'
import Card from './card'
import Avatar from './avatar'
import Image from 'next/image'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu" 

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { AlertTriangle, EllipsisVertical } from 'lucide-react'
   

function Postcard() {
  return (
    <Card>
        <div className="flex gap-3 items-center ">
            <div> 
                <Avatar />
            </div>
            <div className='grow'> 
                <p className="text-xs "> <span className="font-semibold text-sm ">@Jane Wanjiku </span> <span className="">shared a post </span> </p>
                <p className=" text-xs text-slate-300 italic">1 hour Ago</p>
            </div>
            <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <EllipsisVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <span className='font-semibold text-yellow-600  inline-flex items-center gap-2'> <AlertTriangle/>Report</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </div>
        <div className='h-30'>
            <h2 className='text-red-400 font-light text-center text-xs py-4 px-6'> Available at Kaloleni, Nairobi. Call me at O724 245 647</h2>
                <Carousel >
                    <CarouselContent>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="flex justify-center aspect-square items-center">
                                    <Image src={`/assets/${index+1}.jpg`} alt='picture'  height ={250} width={450} className='rounded-md text-center'/>
                                </div>
                            </CarouselItem>
                        ))}
                        <CarouselItem >
                           
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                
        </div>
    </Card>
  )
}

export default Postcard