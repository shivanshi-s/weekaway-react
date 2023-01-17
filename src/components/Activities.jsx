import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
         <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
            <img className='w-full h-full object-cover relative border-white shadow-lg border-4' src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="resorts" />
         </div>

         <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
            <img className='w-full h-full object-cover relative border-white shadow-lg border-4' src="https://images.unsplash.com/photo-1588192042336-371c79ff05b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="resorts" />
         </div>

         <div className='relative p-4 '>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Excursions</h3>
            <img className='w-full h-full object-cover relative border-white shadow-lg border-4' src="https://images.unsplash.com/photo-1587565725500-b2f408632a31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="resorts" />
         </div>

         
    </div>
  )
}

export default Activities