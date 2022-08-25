import { Box, Typography } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import { KeyboardArrowDown } from '@mui/icons-material'

export default function FilterButton({ isShowFilterAdvance, setIsShowFilterAdvance }) {
  return (
    <Box sx={{ display: 'flex', verticalAlign: 'center', paddingTop: '2.5%' }}>
      <TuneIcon sx={{ color: '#fff', transform: 'rotate(270deg)' }} />
      <Box sx={{}}>
        <Box
          onClick={() => setIsShowFilterAdvance(!isShowFilterAdvance)}
          sx={{ color: '#fff', display: 'flex', cursor: 'pointer' }}
        >
          <Typography>Thêm</Typography>
          <KeyboardArrowDown
            sx={{
              mr: -1,
              opacity: 1,
              transform: isShowFilterAdvance ? 'rotate(-180deg)' : 'rotate(0)',
              transition: '0.2s',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
