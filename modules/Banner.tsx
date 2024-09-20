import React from 'react'
import Image from 'next/image'
import { Overlay } from '@/components/Overlay'
import { Container } from '@/components/Container'

export const Banner = () => {
  return (
    <div className="relative w-full h-[260px] md:h-[300px]">
        <Image src="/hero2.jpg" alt="banner" fill className="object-cover"/>
        <Overlay />

        <div className="absolute bottom-4 left-0 w-full h-auto">
            <Container>
                something
            </Container>
        </div>
    </div>
  )
}
