import houseTypeArray from '../../../factory/home/houseTypeMaster'

function FilterSelect() {
  const array = houseTypeArray
  return (
    <div className="filter-base-1">
      <select name="option1" id="option_1">
        <option>Loại nhà đất</option>
        {array.map((ele, index) => (
          <option key={ele.id} data-link={ele.label} value={ele.id}>
            {ele.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterSelect
