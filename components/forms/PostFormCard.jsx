import React from 'react'
import Card from '../cards/card'
import Image from 'next/image'
import { MapPinPlus, MessageSquareShare, Smile, SmilePlus } from 'lucide-react'
import Avatar from '../cards/avatar'

function PostFormCard() {
  return (
    <Card> 
        <div className='flex gap-1'>
            <div >
                <Avatar />
            </div>
            <textarea className='grow px-3 h-14 outline-none focus:ring-0 focus:border-none p-2  rounded-md' placeholder="Where are you available, right now ?"/>
        </div>
        <div className='flex justify-between items-center  mt-3' >
            <div className='flex gap-5 '>
                <div className="flex gap-1 text-xs text-slate-400  hover:text-red-700">
                    <MapPinPlus />
                    <button>location</button>
                </div>
                <div className="flex gap-1 text-xs text-slate-400  hover:text-red-700">
                    <SmilePlus />
                    <button> Mood </button> 
                </div>
            </div>
            <div className="flex gap-1 text-xs bg-blue-400 hover:bg-blue-800 px-2 py-1 rounded-md text-slate-50  hover:text-white">
                    <MessageSquareShare />
                    <button> Post </button> 
                </div>
        </div>
    </Card>
  )
}

export default PostFormCard