import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Route } from '@/types/route';
export const Logo = () => {
  return (
    <Link href={Route.HOME}>
        <Image src="/logo2.png" alt="logo" width={40} height={40}/>
    </Link>
  )
}
