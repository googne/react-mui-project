import React from 'react'
import { TextField } from '@mui/material'
import NextLine from './../NextLine'

const TextField_ = () => {
  return (
    <>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <NextLine />
    </>
  )
}

export default TextField_
