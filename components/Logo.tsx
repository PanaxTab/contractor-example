import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
export const Logo = () => {
  return (
    <Link href="/">
        <Image src="/logo2.png" alt="logo" width={40} height={40}/>
    </Link>
  )
}
