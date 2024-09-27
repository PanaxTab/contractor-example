import Image from 'next/image'
import React from 'react'

interface LabelwithIconColorProps{
    image:string,
    alt:string,
    text:string | number,
}

export const LabelWithIconColor = ({image,alt,text}:LabelwithIconColorProps)=>{
  return (
    <div className="flex items-center gap-2 p-2 bg-primary">
        <Image src={image} alt={alt} width={24} height={24}/>
    <p className='text-sm'>{text}</p>
    </div>
  )
}
