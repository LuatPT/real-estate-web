import { useState } from 'react'

function FilterTab() {
  const [isRentHouse, setIsRentHouse] = useState(false)
  return (
    <div className="filter-tab">
      <span
        data-text="bán"
        onClick={() => setIsRentHouse(!isRentHouse)}
        className={!isRentHouse ? 'active' : ''}
      >
        Nhà đất bán
      </span>
      <span
        data-text="thuê"
        onClick={() => setIsRentHouse(!isRentHouse)}
        className={isRentHouse ? 'active' : ''}
      >
        Nhà đất cho thuê
      </span>
    </div>
  )
}
export default FilterTab
