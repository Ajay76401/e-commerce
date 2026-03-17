import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border '>
      
      <div className='h-[13rem] w-[10rem]'>
        <img  className='object-cover object-top w-full h-full' src="https://www.ethnicplus.in/cdn/shop/files/poster_1235_780x.jpg?v=1762506049" alt="" />

      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-grey-900'>Nofilter</h3>
        <p className='mt-2 text-sm text-gray-500'>Men Solid Pure cotten Straight Kurta</p>

      </div>
    </div>
  )
}

export default HomeSectionCard
