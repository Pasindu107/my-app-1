import React from 'react'
import Message from '../components/Message'
import Header from '@/components/Header'

const orders = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header page='Orders'/>
      <Message />
    </div>
  )
}

export default orders
