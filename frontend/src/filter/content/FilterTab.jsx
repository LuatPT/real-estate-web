import { Box } from '@mui/material'
import { useState } from 'react'

function SpanText({ isRentHouse, setIsRentHouse, value }) {
  const isActive =
    (isRentHouse && value === 'Nhà đất cho thuê') || (!isRentHouse && value === 'Nhà đất bán')
  return (
    <Box
      component="span"
      sx={{
        lineHeight: '45px',
        padding: '0 30px',
        margin: '0 3px',
        borderTopLeftRadius: '7px',
        borderTopRightRadius: '7px',
        fontFamily: 'FontMuli',
        color: '#fff',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: isActive ? '#4c6c94' : '',
      }}
      onClick={() => setIsRentHouse(!isRentHouse)}
    >
      {value}
    </Box>
  )
}

export default function FilterTab() {
  const [isRentHouse, setIsRentHouse] = useState(false)
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <SpanText isRentHouse={isRentHouse} setIsRentHouse={setIsRentHouse} value={'Nhà đất bán'} />
      <SpanText
        isRentHouse={isRentHouse}
        setIsRentHouse={setIsRentHouse}
        value={'Nhà đất cho thuê'}
      />
    </Box>
  )
}
