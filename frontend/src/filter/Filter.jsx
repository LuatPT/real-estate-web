// import './Filter.css'
import { Box } from '@mui/material'
import FilterBody from './FilterBody'
import FilterFooter from './FilterFooter'
import FilterHeader from './FilterHeader'

export default function Filter() {
  return (
    <Box
      sx={{
        minHeight: 400,
        padding: '1%',
        backgroundImage:
          "url('https://data.designervn.net/2021/05/13620_a9496a375b0c4fca048221bc21ce6526.png')",
      }}
    >
      <FilterHeader />
      <FilterBody />
      <FilterFooter />
    </Box>
  )
}
