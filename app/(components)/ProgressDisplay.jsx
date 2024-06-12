import React from 'react'

const ProgressDisplay = ({progress}) => {
  
  return (
    <div className='w-full rounded-full bg-gray-400 h-2.5'>
        <div className=" rounded-full bg-blue-600 h-2.5
        " style={{width:`${progress}%`}}>

        </div>
    </div>
  )
}

export default ProgressDisplay