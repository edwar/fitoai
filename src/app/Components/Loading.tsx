import React from 'react'

const Loading = () => {
  return <div className="absolute inset-0 bg-slate-900/90 flex items-center justify-center z-10">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-teal-600 animate-spin">
        </div>
    </div>
</div>
}

export default Loading
