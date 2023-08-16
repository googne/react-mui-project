import React from 'react'
import { Button } from '@mui/material'
import NextLine from './NextLine'

const Button_ = () => {
  return (
    <>
      <Button color="secondary" variant="text">
        Text
      </Button>
      <Button color="error" variant="contained">
        Contained
      </Button>
      <Button color="success" variant="outlined">
        Outlined
      </Button>
      <NextLine />
    </>
  )
}

export default Button_
