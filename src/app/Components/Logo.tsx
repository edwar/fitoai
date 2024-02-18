import React from 'react'

interface Props {
    size: 'large' | 'small'
}

const Logo = ({ size }: Props) => {
  return <div className="flex items-center justify-center">
    <div className="relative">
        <div className={`${size == 'small' ? "h-9 w-9" : "h-20 w-20"} rounded-full border-t-8 border-b-8 border-gray-200`}></div>
        <div className={`${size === 'small' ? "h-9 w-9" : "h-20 w-20"} absolute top-0 left-0 rounded-full border-t-8 border-b-8 border-teal-600 rotate-90`}>
        </div>
    </div>
</div>
}

export default Logo