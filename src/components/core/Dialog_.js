import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import React, { useState } from 'react'
import NextLine from './../NextLine'

const Dialog_ = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog hideBackdrop open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Hello</DialogTitle>
        <DialogContent>
          <DialogContentText>
            A dialog is popup window which can ask user input
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Agree</Button>
        </DialogActions>
      </Dialog>
      <NextLine />
    </div>
  )
}

export default Dialog_
