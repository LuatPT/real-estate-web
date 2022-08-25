import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import BubbleSpan from '../common/BubbleSpan'
import CompletedProductListHeader from './CompletedProductHeader'

const itemData = [
  {
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/da_1.jpg?1659414408430',
    title: 'Hà Nội',
    rows: 1,
    cols: 3,
  },
  {
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/da_2.jpg?1659414408430',
    title: 'Đà Nẵng',
    rows: 1,
    col: 4,
  },
  {
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/da_5.jpg?1659414408430',
    title: 'TP.HCM',
    rows: 2,
    col: 2,
  },
  {
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/da_3.jpg?1659414408430',
    title: 'Nghệ An',
    rows: 1,
    cols: 2,
  },
  {
    img: 'https://bizweb.dktcdn.net/100/393/384/themes/871144/assets/da_4.jpg?1659414408430',
    title: 'Hải Phòng',
    rows: 1,
    cols: 2,
  },
]

export default function CompletedProducts() {
  return (
    <Box>
      <CompletedProductListHeader />
      <ImageList sx={{ width: '100%', height: '100%' }} variant="quilted" gap={20} cols={5}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '7px',
            }}
          >
            <img src={item.img} alt={item.title} loading="lazy" />
            <Typography
              variant="span"
              sx={{
                color: '#ffff',
                fontSize: '15px',
                lineHeight: '24px',
                position: 'absolute',
                fontWeight: 700,
                bottom: '15px',
                right: '15px',
                textTransform: 'uppercase',
              }}
            >
              {item.title}
            </Typography>
            <BubbleSpan />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
