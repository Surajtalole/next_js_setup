import React from 'react'
import Button from './Button2';

const HeroContent = ({ data }) => {
  return (
    <div className='flex flex-col gap-4 p-10 w-full'>
      <h1 className="text-5xl font-sans">
        {data.title}
      </h1>
      <p className='text-2xl'>{data.desc}</p>
      <Button url={data.buttonUrl} text={data.buttonText}/>  
    </div>
  )
}

export default HeroContent
