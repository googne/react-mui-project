import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const Menu_ = () => {
  const [anchorElm, setanchorElm] = useState(null)
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setanchorElm(null)
    setOpen(false)
  }

  const handleClick = (e) => {
    setanchorElm(e.currentTarget)
    setOpen(true)
  }

  return (
    <div style={{ marginLeft: 'auto' }}>
      <Button variant="contained" onClick={handleClick}>
        Click Me
      </Button>
      <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Balance</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default Menu_
