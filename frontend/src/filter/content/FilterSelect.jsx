import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material'
import { useState } from 'react'

export default function FilterSelect({ data, label }) {
  const [state, setState] = useState('')

  const handleChange = (event) => {
    setState(event.target.value)
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 180, backgroundColor: '#fff', borderRadius: '7px' }}>
      <Select
        value={state}
        onChange={handleChange}
        displayEmpty
        defaultValue="Căn hộ"
        // inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          {label}
        </MenuItem>
        {data.map((ele) => (
          <MenuItem key={ele.id} value={ele.value}>
            {ele.value}
          </MenuItem>
        ))}
      </Select>
      {/* <FormHelperText>Without label</FormHelperText> */}
    </FormControl>
  )
}
