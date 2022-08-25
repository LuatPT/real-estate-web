import { Box, Typography } from '@mui/material'
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined'
export default function CompletedProductListHeader() {
  return (
    <Box sx={{ paddingTop: '50px' }}>
      <Typography sx={{ textAlign: 'center' }} variant="h5">
        Các dự án đã triển khai tại một số thành phố
      </Typography>

      <Typography sx={{ textAlign: 'center', color: '#9fb3d8' }}>
        <PinDropOutlinedIcon />
      </Typography>
    </Box>
  )
}
