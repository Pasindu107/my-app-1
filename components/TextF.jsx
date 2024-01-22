import React from 'react'
import { TextField, Box } from '@mui/material'

export const TextF = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { ml:2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div className=''>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
    </div>  
      
      
    </Box>
  )
}
