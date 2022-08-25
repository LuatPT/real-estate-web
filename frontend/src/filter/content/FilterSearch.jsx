import { Box, Button, FormControl, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
export default function FilterSearch() {
  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl
        sx={{
          m: 1,
          minWidth: 400,
          backgroundColor: '#fff',
          borderRadius: '7px',
        }}
      >
        <TextField
          hiddenLabel
          placeholder="Nhập địa điểm hoặc từ khóa (Ví dụ: Vinhomes)... "
          variant="outlined"
        ></TextField>
      </FormControl>
      <FormControl
        sx={{
          m: 1,
          minWidth: 150,
          borderRadius: '7px',
        }}
      >
        <Button sx={{ lineHeight: 3, textTransform: 'none' }} variant="contained">
          <SearchIcon />
          Tìm kiếm
        </Button>
      </FormControl>
    </Box>
  )
}
