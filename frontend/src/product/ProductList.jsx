import './ProductList.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Box } from '@mui/material'
import ProductListHeader from './ProductListHeader'
import Product from './Product'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, A11y, Navigation, Pagination, Scrollbar } from 'swiper'

const productList = [
  {
    id: 1,
    name: 'Chung cư Vinhomes',
    img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-43.jpg?v=1592554456327',
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
    img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-40.jpg?v=1592551737397',
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
    img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-43.jpg?v=1592554456327',
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
    img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-40.jpg?v=1592551737397',
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
    img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-43.jpg?v=1592554456327',
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
    img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/393/384/products/pd-40.jpg?v=1592551737397',
    address: '151 Phạm Văn Đồng,Cầu Giấy,Hà Nội',
    bedRoom: 2,
    bathRoom: 1,
    price: '1.5 Tỷ',
    size: 'Dưới 100m2',
    isRent: true,
    isFavorite: false,
  },
]

export default function ProductList() {
  return (
    <Box>
      <ProductListHeader />
      <Box sx={{ position: 'relative', minWidth: 500 }}>
        <Swiper
          navigation
          modules={[Grid, Navigation, Pagination, Scrollbar, A11y]}
          className="productListSwipe"
          spaceBetween={5}
          slidesPerView={4}
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {productList.map((ele) => (
            <SwiperSlide key={ele.id}>
              <Product {...ele} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}
