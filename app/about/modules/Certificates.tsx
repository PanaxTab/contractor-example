import { SectionName } from '@/components/SectionName'
import Image from 'next/image'
import React from 'react'



export const Certificates = () => {
  return (
    <div>
        <SectionName name="Certificates" id='certificates'/>
        <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente non, ipsum eum, accusamus cum quia distinctio natus laudantium atque mollitia quae voluptates aut. Odit qui iste repellendus minus reprehenderit alias repudiandae debitis!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:gap-4">
            <div className="flex justify-center items-center">
                <Image src="/certificate.jpg" width={160} height={160} alt='certificate'/>
            </div>
            <div className="">
                <Image src="/certificate2.png" alt="certificate" sizes='100vw' width={0} height={0} className='h-auto w-full'/>
            </div>
        </div>
    </div>
  )
}
