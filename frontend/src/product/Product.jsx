import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place'
import BedIcon from '@mui/icons-material/Bed'
import BathtubIcon from '@mui/icons-material/Bathtub'
import OpenWithIcon from '@mui/icons-material/OpenWith'
import DashedButton from '../common/DashedButton'

export default function Product(ele) {
  return (
    <Box sx={{ padding: '5px' }}>
      <Card
        sx={{
          maxWidth: 345,
          cursor: 'pointer',
          minHeight: 320,
          minWidth: 175,
          position: 'relative',
        }}
      >
        <CardMedia component="img" alt="green iguana" height="140" image={ele.img} />
        <CardContent>
          <Box sx={{ display: 'flex' }}>
            <Typography className="productLb rentLb">
              {ele.isRent ? 'Cho thuê' : 'Cho bán'}
            </Typography>
            <Typography className="productLb favoriteLb">{ele.isFavorite && 'HOT'}</Typography>
          </Box>
          <Typography gutterBottom variant="span" component="div">
            {ele.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#9fb3d8',
              fontSize: '12px',
              display: 'flex',
              gap: '5px',
            }}
          >
            <PlaceIcon color="error" fontSize="inherit" />
            {ele.address}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#9fb3d8',
              fontSize: '12px',
              display: 'flex',
              gap: '5px',
            }}
          >
            <BedIcon color="primary" fontSize="inherit" />
            Phòng ngủ: {ele.bedRoom}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#9fb3d8',
              fontSize: '12px',
              display: 'flex',
              gap: '5px',
            }}
          >
            <BathtubIcon color="primary" fontSize="inherit" />
            Phòng tắm: {ele.bathRoom}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#9fb3d8',
              fontSize: '12px',
              display: 'flex',
              gap: '5px',
            }}
          >
            <OpenWithIcon color="primary" fontSize="inherit" />
            Diện tích: {ele.size}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            verticalAlign: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography gutterBottom color="#3f7df6" variant="span" component="div">
            <b>{ele.price}</b>
          </Typography>
          <DashedButton />
        </CardActions>
      </Card>
    </Box>
  )
}
