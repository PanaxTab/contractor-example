import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>
{
}

export const Input = ({...rest}:InputProps) => {
  return (
    <input className='w-full bg-neutral-100 p-3 rounded-lg focus:ring-yellow-500' {...rest}/>
    
  )
}
