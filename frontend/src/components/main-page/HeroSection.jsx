
import React from 'react'

const Home = () => {
  return (
    <div className='heroSection w-full h-[100%] flex items-center justify-center'>
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto mt-24 mb-24 text-white text-center'>
      <div className='text-3xl font-bold max-w-[871px] md:text-6xl'>
        Discover Money-Making Startups And Side-Projects.
      </div>
      <div className='text-white text-sm mt-14 md:mt-24 md:text-2xl max-w-[871px]'>
        <p>Sign-up for our free weekly newsletter & learn
how founders are building profitable projects 
and making money online 💸</p>
      </div>
      <div>
        <div className='flex justify-center mt-14'>
            <input type="text" placeholder='Enter your Email' className='px-5 w-2/3 py-3 text-md md:text-lg rounded-tl-lg rounded-bl-lg' />
            <button className='text-md md:text-2xl font-semibold bg-blueColor px-4 md:px-10 py-3 rounded-br-lg rounded-tr-lg'>Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home