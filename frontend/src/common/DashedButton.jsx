import { Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { keyframes } from '@mui/system'

const spin = keyframes`
  0%   {width: 0px;}
  25%  {width: 25px;}
  50%  {width: 50px;}
  100% {width: 105px;}
`

export default function DashedButton() {
  return (
    <Button
      sx={{
        border: '1px dashed #3f7df6',
        borderRadius: '7px',
        textTransform: 'none',
        transition: 'all 1s ease',
        background: 'primary.main',
        ':hover': {
          // animationName: `${spin}`,
          // width: "105px",
          // height: "30px",
          // animationDuration: "4s",
          bgcolor: 'primary.main',
          color: 'white',
        },
      }}
      variant="outlined"
      size="small"
    >
      Mua theo lô <ArrowForwardIosIcon fontSize="12px" color="primary" />
    </Button>
  )
}
