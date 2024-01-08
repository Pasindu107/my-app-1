import React from 'react'
import Link from 'next/link'


const customers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <h2>Customers</h2>
            <Link href={'/'}><h2>Pasindu</h2></Link>
        </div>
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <span>Name</span>
                    <span className='sm:text-left text-right'>Email</span>
                    <span className='hidden md:grid'>Last order</span>
                    <span className='hidden sm:grid'>Method</span>
                </div>
            </div>

        </div>
    </div>
    
  )
}

export default customers