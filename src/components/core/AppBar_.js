import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Menu_ from './Menu_'
import Tabs_ from './Tabs_'

const AppBar_ = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>LOGO</Typography>
          <Tabs_ />
          <Menu_ />
          <Button
            variant="contained"
            sx={{ marginLeft: 'auto' }}
            color="warning"
          >
            Hello
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default AppBar_
