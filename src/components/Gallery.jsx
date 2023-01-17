import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
         <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
         <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
               <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1494947356691-434358cea5a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="gallery" />
            </div>
            <div>
               <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1546237769-db6351c228d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="gallery" />
            </div>
            <div>
               <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1606577583855-7887c860e755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="gallery" />
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1546237769-eaa40eee19b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="gallery" />
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1589817559780-02ce2a79a5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="gallery" />
            </div>
         </div>
    </div>
  )
}

export default Gallery