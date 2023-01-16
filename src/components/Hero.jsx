import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="weekend"
        className='w-full h-full object-cover' />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4 drop-shadow-xl'>
               <h1 className='font-bold text-5xl drop-shadow-xl'>Find Your Special Trip</h1>
               <h2 className='text-5xl py-4 bold bg-gradient-to-r from-blue-400 to-transparent' >With Weekaway</h2>
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur culpa, explicabo eum similique iste nobis incidunt blanditiis illum temporibus maiores? Officiis inventore et facilis unde incidunt maiores fuga quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sint voluptatum voluptas voluptate voluptatibus nisi rem delectus dignissimos consectetur est. </p>
            </div>
        </div>
    </div>
  )
}

export default Hero