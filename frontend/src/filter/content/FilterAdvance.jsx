import { Box } from '@mui/material'
import FilterSelect from './FilterSelect'
const data = [
  {
    id: '1',
    label: 'Tỉnh/thành phố',
    data: [
      { id: 1, value: 'HN' },
      { id: 2, value: 'Đà Nẵng' },
      { id: 3, value: 'Nha Trang' },
      { id: 4, value: 'Hồ Chí Minh' },
    ],
  },
  {
    id: '2',
    label: 'Quận/huyện',
    data: [{ id: 1, value: 'Hải Châu' }],
  },
  {
    id: '3',
    label: 'Diện tích',
    data: [
      { id: 1, value: 'Dưới 100m2' },
      { id: 2, value: 'Trên 100m2' },
    ],
  },
  {
    id: '4',
    label: 'Giá',
    data: [
      { id: 1, value: 'Dưới 1 tỷ' },
      { id: 2, value: 'Trên 1 tỷ' },
    ],
  },
]
export default function FilterAdvance({ isShowFilterAdvance }) {
  return (
    isShowFilterAdvance && (
      <Box sx={{ backgroundColor: '#4c6c94', color: '#fff', display: 'flex' }}>
        {data.map((item) => (
          <FilterSelect key={item.id} data={item.data} label={item.label} />
        ))}
      </Box>
    )
  )
}
