import { Box, Typography } from '@mui/material'

export default function FilterHeader() {
  return (
    <Box sx={{ padding: '1%' }}>
      <Typography
        variant="h5"
        sx={{ textTransform: 'uppercase', textAlign: 'center', color: 'white' }}
      >
        <p>Cách tiếp cận bất động sản nhanh nhất</p>
      </Typography>
    </Box>
  )
}
