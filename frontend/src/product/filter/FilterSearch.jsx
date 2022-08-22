import Button from '@mui/material/Button'
function FilterSearch() {
  return (
    <div className="filter-base-2">
      <div className="filter-search-form">
        <input
          type="text"
          name="query"
          placeholder="Nhập địa điểm hoặc từ khóa (Ví dụ: Vinhomes)... "
          autoComplete="off"
        />
      </div>

      <Button
        style={{
          width: 180,
          height: 50,
          marginLeft: 10,
          borderRadius: 7,
          backgroundColor: '#3f7df6',
        }}
        variant="contained"
      >
        Tìm kiếm
      </Button>
    </div>
  )
}

export default FilterSearch
