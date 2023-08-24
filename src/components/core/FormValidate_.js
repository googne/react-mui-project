import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

const FormValidate_ = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)
  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          border: '1px solid black',
          width: '300px',
          margin: '100px auto',
          padding: '20px',
          borderRadius: '5px',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          type="email"
          placeholder="Email"
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email) ? (
              <Typography component="span">Invalid Email</Typography>
            ) : null
          }
          {...register('email', {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        <TextField
          type="password"
          {...register('password', {
            required: true,
            minLength: 6,
          })}
        />

        <Button
          disabled={Boolean(errors.email)}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default FormValidate_
