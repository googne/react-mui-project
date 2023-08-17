import { Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

const Tabs_ = () => {
  const [value, setValue] = useState(0)

  return (
    <div>
      <Tabs
        indicatorColor="secondary"
        value={value}
        textColor="inherit"
        onChange={(e, val) => setValue(val)}
        sx={{ marginLeft: '50px' }}
      >
        <Tab label="First" />
        <Tab label="Second" />
        <Tab label="Third" />
      </Tabs>
    </div>
  )
}

export default Tabs_
