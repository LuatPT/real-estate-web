import FilterSelect from './FilterSelect'
import FilterSearch from './FilterSearch'
import FilterButton from './FilterButton'

function FilterGroup() {
  return (
    <div className="filter-group">
      <div className="filter-base">
        <FilterSelect />
        <FilterSearch />
        <FilterButton />
      </div>
      <div className="filter-advance"></div>
    </div>
  )
}
export default FilterGroup
