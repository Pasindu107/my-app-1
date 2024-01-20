import React from 'react'
import {data} from '../data/data.js'
import {FashoppingBag} from 'react-icons/fa' 

const Projects = () => {
  return (
    <div>
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                <div className='my-3 p-2 grid md:grid-colos-4 sm:grid-cols-3 '>
                    <span>Name</span>
                    <span>Email</span>
                    <span>Last Order</span>
                    <span>Method</span>
                </div>
               
            </div>
            
        </div>

    </div>
  )
}

export default Projects