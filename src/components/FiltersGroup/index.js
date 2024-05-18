import {BsSearch} from 'react-icon/bs'

import ProfileDetails from '../ProfileDetails'
import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event)
  }

  const onEnterSearchInput = event => {
    const {getJobs} = props
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const renderSearchInput = () => {
    const {getJobs, searchInput} = props
    return (
      <div className="search">
        <input
          type="search"
          className="search-i"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button
          type="button"
          id="searchButton"
          className="search-btn"
          onClick={getJobs}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const renderTypeOfEmployment = () => {
    const {employmentTypesList} = props

    return (
      <div className="emplo">
        <h1>Type of Employment</h1>
        <ul className="list">
          {employmentTypesList.map(eachEmployeeType => {
            const {changeEmployeeList} = props
            const onSelectEmployeeType = event => {
              changeEmployeeList(event.target.value)
            }
            return (
              <li
                className="item"
                key={eachEmployeeType.employmentTypeId}
                onChange={onSelectEmployeeType}
              >
                <input
                  type="checkbox"
                  id={eachEmployeeType.employmentTypeId}
                  className="check-input"
                  value={eachEmployeeType.employmentTypeId}
                />
                <label
                  htmlFor={eachEmployeeType.employmentTypeId}
                  className="label"
                >
                  {eachEmployeeType.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList} = props
    return (
      <div className="salary">
        <h1>Salary Range</h1>
        <ul className="range">
            {salaryRangesList.map(eachSalary) => {
                const {changeSalary} = props
                const onClickSalary = () => {
                    changeSalary(eachSalary.salaryRangeId)
                }
                return (
              <li
                className="item"
                key={eachSalary.salaryRangeId}
                onChange={onClickSalary}
              >
                <input
                  type="radio"
                  id={eachSalary.salaryRangeId}
                  name="salary"
                  className="check"
                />
                <label
                  htmlFor={eachSalary.salaryRangeId}
                  className="label"
                >
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
      <div className="filter">
          {renderSearchInput()}
          <ProfileDetails />
          <hr className="horizontal-line" />
          {renderTypeOfEmployment()}
          <hr className="line" />
          {renderSalaryRange()}
      </div>
  )
}
export default FiltersGroup