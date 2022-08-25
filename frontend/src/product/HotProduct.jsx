import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'

import PlaceIcon from '@mui/icons-material/Place'
import BedIcon from '@mui/icons-material/Bed'
import BathtubIcon from '@mui/icons-material/Bathtub'
import OpenWithIcon from '@mui/icons-material/OpenWith'
import DashedButton from '../common/DashedButton'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function HotProduct(ele) {
  const imgArr = ele.img
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ position: 'relative' }}>
        <Swiper
          style={{ minHeight: '500px', maxWidth: '500px' }}
          navigation
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="innerSwipe"
          pagination={{
            // type: "fraction",
            clickable: true,
          }}
        >
          {imgArr.map((item) => (
            <SwiperSlide key={item.id}>
              <Box sx={{ display: 'flex' }}>
                <img src={item.src} alt="common" />
                {ele.name}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        <Box sx={{ display: 'flex' }}>
          <Typography className="productLb rentLb">
            {ele.isRent ? 'Cho thuê' : 'Cho bán'}
          </Typography>
          <Typography className="productLb favoriteLb">{ele.isFavorite && 'HOT'}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '5%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography gutterBottom variant="span" component="div">
            {ele.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
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
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  )
}
