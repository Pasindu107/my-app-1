import React from 'react'

const Header = (props) => {
  return (
    <div className='flex justify-between px-4 pt-4'>
      <h2>{props.page}</h2>
      <h2>Welocome Back, Pasindu</h2>
    </div>
  )
}

export default Header
