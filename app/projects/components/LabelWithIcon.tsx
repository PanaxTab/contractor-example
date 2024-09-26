import Image from 'next/image'
import React from 'react'

interface LabelwithIconProps{
    image:string,
    alt:string,
    text:String | number,
}

export const LabelWithIcon = ({image,alt,text}:LabelwithIconProps)=>{
  return (
    <div className="flex items-center gap-2 p-2 bg-white">
        <Image src={image} alt={alt} width={24} height={24}/>
    <p className='text-sm'>{text}</p>
    </div>
  )
}
