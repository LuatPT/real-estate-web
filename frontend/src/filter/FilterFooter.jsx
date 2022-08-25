import { Box } from '@mui/material'
import ImageBox from './content/ImageBox'

const imageList = [
  {
    id: 1,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/collection_1.png?1659414408430',
    label: 'Căn hộ',
  },
  {
    id: 2,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/collection_2.png?1659414408430',
    label: 'Biệt thự',
  },
  {
    id: 3,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/collection_3.png?1659414408430',
    label: 'Chung cư',
  },
  {
    id: 4,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/collection_4.png?1659414408430',
    label: 'Nhà phố',
  },
  {
    id: 5,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/collection_5.png?1659414408430',
    label: 'Văn phòng',
  },
  {
    id: 6,
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/collection_6.png?1659414408430',
    label: 'Cửa hàng',
  },
]

export default function FilterFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: '#4c6c94',
        padding: '1%',
        opacity: 0.85,
      }}
    >
      {imageList.map((ele) => (
        <ImageBox key={ele.id} ele={ele} />
      ))}
    </Box>
  )
}
