import { Navigation, Pagination } from 'swiper'

import { SwiperSlide, Swiper } from 'swiper/react'
import HotProduct from './HotProduct'

import { Box } from '@mui/material'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
const hotProductList = [
  {
    id: 1,
    name: 'Chung cư Vinhomes',
    img: [
      {
        id: 1,
        src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-43.jpg?v=1592554456327',
      },
      {
        id: 2,
        src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-40.jpg?v=1592551737397',
      },
    ],
    address: 'Nguyễn Xiển, Đại Kim, Hoàng Mai, HN',
    bedRoom: 2,
    bathRoom: 2,
    price: '1.5 Tỷ',
    size: 'Trên 100m2',
    isRent: false,
    isFavorite: true,
  },
  {
    id: 2,
    name: 'Căn hộ The Art',
    img: [
      {
        id: 1,
        src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-43.jpg?v=1592554456327',
      },
      {
        id: 2,
        src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-40.jpg?v=1592551737397',
      },
    ],
    address: '151 Phạm Văn Đồng,Cầu Giấy,Hà Nội',
    bedRoom: 2,
    bathRoom: 1,
    price: '1.5 Tỷ',
    size: 'Dưới 100m2',
    isRent: false,
    isFavorite: true,
  },
  {
    id: 3,
    name: 'Chung cư Vinhomes',
    img: [
      {
        id: 1,
        src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-43.jpg?v=1592554456327',
      },
      {
        id: 2,
        src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-40.jpg?v=1592551737397',
      },
    ],
    address: 'Nguyễn Xiển, Đại Kim, Hoàng Mai, HN',
    bedRoom: 2,
    bathRoom: 2,
    price: '1.5 Tỷ',
    size: 'Trên 100m2',
    isRent: true,
    isFavorite: true,
  },
  {
    id: 4,
    name: 'Căn hộ The Art',
    img: [
      {
        id: 1,
        src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-43.jpg?v=1592554456327',
      },
      {
        id: 2,
        src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-40.jpg?v=1592551737397',
      },
    ],
    address: '151 Phạm Văn Đồng,Cầu Giấy,Hà Nội',
    bedRoom: 2,
    bathRoom: 1,
    price: '1.5 Tỷ',
    size: 'Dưới 100m2',
    isRent: false,
    isFavorite: true,
  },
  {
    id: 5,
    name: 'Chung cư Vinhomes',
    img: [
      {
        id: 1,
        src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-43.jpg?v=1592554456327',
      },
      {
        id: 2,
        src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-40.jpg?v=1592551737397',
      },
    ],
    address: 'Nguyễn Xiển, Đại Kim, Hoàng Mai, HN',
    bedRoom: 2,
    bathRoom: 2,
    price: '1.5 Tỷ',
    size: 'Trên 100m2',
    isRent: false,
    isFavorite: false,
  },
  {
    id: 6,
    name: 'Căn hộ The Art',
    img: [
      {
        id: 1,
        src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-43.jpg?v=1592554456327',
      },
      {
        id: 2,
        src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-40.jpg?v=1592551737397',
      },
    ],
    address: '151 Phạm Văn Đồng,Cầu Giấy,Hà Nội',
    bedRoom: 2,
    bathRoom: 1,
    price: '1.5 Tỷ',
    size: 'Dưới 100m2',
    isRent: true,
    isFavorite: false,
  },
]
export default function HotProductList() {
  return (
    <Box sx={{ position: 'relative', paddingTop: '1%' }}>
      <Swiper navigation modules={[Navigation]} className="hotProductListSwipe">
        {hotProductList.map((ele) => (
          <SwiperSlide key={ele.id}>
            <HotProduct {...ele} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
