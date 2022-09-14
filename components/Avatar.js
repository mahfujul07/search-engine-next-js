import React from 'react'
import Image from 'next/image'

const Avatar = ({url, className}) => {
  return (
    <div>
        <Image
            loading="lazy"
            src={url}
            height={40}
            width={40}
            alt="Profile Picture"
            className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        />
    </div>
  )
}

export default Avatar