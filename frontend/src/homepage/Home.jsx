import './Home.css'
import '../product/ProductList.css'
import { Box } from '@mui/material'
import ProductList from '../product/ProductList'
import Filter from '../filter/Filter'
import CompletedProducts from '../product/CompletedProducts'
import HotProductList from '../product/HotProductList'
import BrandList from '../brand/BrandList'

export default function Home() {
  return (
    <Box>
      <Filter />
      <ProductList />
      <HotProductList />
      <BrandList />
      <CompletedProducts />
    </Box>
  )
}
