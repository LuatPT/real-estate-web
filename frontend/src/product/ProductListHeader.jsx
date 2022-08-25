import { Box, Typography } from '@mui/material'
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined'
export default function ProductListHeader() {
  return (
    <Box sx={{ paddingTop: '20px' }}>
      <Typography sx={{ textAlign: 'center' }} variant="h5">
        Bất động sản cho bán
      </Typography>

      <Typography sx={{ textAlign: 'center', color: '#9fb3d8' }}>
        <PinDropOutlinedIcon />
      </Typography>
    </Box>
  )
}
