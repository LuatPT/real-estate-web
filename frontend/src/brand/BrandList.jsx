import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Brand from './Brand'
import { Box } from '@mui/material'

const imageArr = [
  {
    id: 1,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/img_brand_5.jpg?1659414408430',
  },
  {
    id: 2,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/img_brand_3.jpg?1659414408430',
  },
  {
    id: 3,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/img_brand_7.jpg?1659414408430',
  },
  {
    id: 4,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/img_brand_5.jpg?1659414408430',
  },
  {
    id: 5,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/img_brand_3.jpg?1659414408430',
  },
  {
    id: 6,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/img_brand_7.jpg?1659414408430',
  },
  {
    id: 7,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/img_brand_5.jpg?1659414408430',
  },
  {
    id: 8,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/img_brand_3.jpg?1659414408430',
  },
  {
    id: 9,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/img_brand_7.jpg?1659414408430',
  },
]

export default function BrandList() {
  return (
    <Box sx={{ position: 'relative', paddingTop: '1%' }}>
      <Swiper
        navigation={true}
        pagination={true}
        slidesPerView={6}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="brandSwipe"
      >
        {imageArr.map((ele) => (
          <SwiperSlide>
            <Brand key={ele.id} {...ele} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
