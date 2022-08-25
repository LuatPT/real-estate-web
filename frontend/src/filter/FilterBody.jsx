import { Box } from '@mui/material'
import { useState } from 'react'
import FilterAdvance from './content/FilterAdvance'
import FilterButton from './content/FilterButton'
import FilterSearch from './content/FilterSearch'
import FilterSelect from './content/FilterSelect'
import FilterTab from './content/FilterTab'
const dataHouseTypes = [
  { id: 1, value: 'Biệt thự' },
  { id: 2, value: 'Căn hộ' },
  { id: 3, value: 'Chung cư' },
  { id: 4, value: 'Chung cư cao cấp' },
]
export default function FilterBody() {
  const [isShowFilterAdvance, setIsShowFilterAdvance] = useState(false)
  return (
    <Box sx={{ opacity: 0.85 }}>
      <FilterTab />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          borderTopLeftRadius: '7px',
          borderTopRightRadius: '7px',
          backgroundColor: '#4c6c94',
        }}
      >
        <Box>
          <Box sx={{ display: 'flex' }}>
            <FilterSelect data={dataHouseTypes} label={'Loại nhà đất'} />
            <FilterSearch />
            <FilterButton
              isShowFilterAdvance={isShowFilterAdvance}
              setIsShowFilterAdvance={setIsShowFilterAdvance}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: '#4c6c94',
            }}
          >
            <FilterAdvance isShowFilterAdvance={isShowFilterAdvance} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
