import React from 'react'
import Image from 'next/image'

const HeroImage = ({ data }) => {
  return (
    <div className='w-full'>
        <Image
            src={data.heroUrl}
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
        />
    </div>
  )
}

export default HeroImage
