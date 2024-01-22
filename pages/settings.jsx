import React from 'react'
import Header from '@/components/Header'
import { TextF } from '@/components/TextF'


const settings = () => {
  return (
    <div>
        <Header page='Settings'/>
        <div className='grid lg:grid-cols-5 gap-4 p-4'>
          <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                  <div className=''>
                      <p className='text-2xl font-bold'></p>
                  </div>
                  <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                      <span className='text-green-700 tetx-lg'></span>
                  </p>               
          </div>
        </div>
        <TextF/>
    </div>
    
  )
}

export default settings