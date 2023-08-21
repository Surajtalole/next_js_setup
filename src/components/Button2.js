import React from 'react'

const Button2 = ({ text, url }) => {
  return (
    <div className='mt-5'>
      <a href={url} className='p-5 bg-purple-600 text-black rounded-xl'> {text}</a>
    </div>
  )
}

export default Button2
