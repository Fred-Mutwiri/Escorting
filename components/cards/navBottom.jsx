"use client"

import React from 'react'
import Card from './card'
import { HomeIcon, Search, User } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

function NavBottom() {
  // const router = useRouter()
  const pathname = usePathname();
  console.log("pathname", pathname);
  const active = 'flex gap-2 py-3 my-2 -mx-2 px-4  rounded-md bg-slate-100  scale-110 text-rose-600 transition-all  shadow shadow-rose-500';
  const nonActive = 'flex gap-2 py-3 my-2 -mx-2 px-4  rounded-md hover:bg-slate-100  transition-all  hover:scale-110 hover:shadow-sm hover:shadow-rose-500';
  return (
    <Card>
        <div className=' flex justify-around gap-2'>
            <Link href="/" className={ pathname === '/' ? active : nonActive}>
                <HomeIcon />
                <p>Home</p>
            </Link>
            <Link href="/" className={ pathname === '/search' ? active : nonActive}>
                <Search />
                <p>Search</p>
            </Link>
            <Link href="/profile" className={ pathname === '/profile' ? active : nonActive}>
                <User />
                <p>Profile</p>
            </Link>
            
            <Link href="/" className={`${nonActive} italic text-slate-500`}>logout</Link>
        </div>
    </Card>
  )
}

export default NavBottom;