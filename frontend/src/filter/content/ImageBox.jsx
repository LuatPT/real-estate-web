import { Box, Typography } from '@mui/material'

export default function ImageBox({ ele }) {
  return (
    <Box sx={{}}>
      <img src={ele.img} alt={ele.label} loading="lazy" />
      <Typography sx={{ color: '#fff' }}>{ele.label}</Typography>
    </Box>
  )
}
