import './Filter.css'
import { useState } from 'react'
import FilterTab from './filter/FilterTab'
import FilterGroup from './filter/FilterGroup'

function Filter() {
  return (
    <div className="filter-panel">
      <div className="filter-panel-header">
        <p>Cách tiếp cận bất động sản nhanh nhất</p>
      </div>
      <div className="filter-panel-body">
        <div className="container">
          <div className="filter-box">
            <FilterTab />
            <FilterGroup />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Filter
