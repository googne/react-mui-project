import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import NextLine from './NextLine'

const Form_ = () => {
  const [inputs, setInputs] = useState({
    name: 'Aryan',
    email: 'admin@example.com',
    password: '123',
    age: 20,
    gender: '',
    subscribe: true,
    remember: true,
  })

  const handleTextChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCheckboxChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: !inputs[e.target.name],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
  }

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <TextField
          value={inputs.name}
          onChange={handleTextChange}
          name="name"
          type="text"
          sx={{ margin: 3 }}
          label="Name"
          variant="outlined"
        />
        <TextField
          value={inputs.email}
          onChange={handleTextChange}
          name="email"
          type="email"
          sx={{ margin: 3 }}
          label="Email"
          variant="outlined"
        />
        <TextField
          value={inputs.password}
          onChange={handleTextChange}
          name="password"
          type="password"
          sx={{ margin: 3 }}
          label="Password"
          variant="outlined"
        />

        <FormControl sx={{ margin: 3 }}>
          <InputLabel>Age</InputLabel>
          <Select
            label="Age"
            name="age"
            value={inputs.age}
            onChange={handleTextChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ margin: 3 }}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={inputs.gender}
            onChange={handleTextChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <FormGroup sx={{ marginLeft: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                name="subscribe"
                checked={inputs.subscribe}
                onChange={handleCheckboxChange}
              />
            }
            label="Subscribe To Newsletter"
          />
        </FormGroup>

        <FormGroup sx={{ marginLeft: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                name="remember"
                checked={inputs.remember}
                onChange={handleCheckboxChange}
              />
            }
            label="Remember Me?"
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
      <NextLine />
    </div>
  )
}

export default Form_
