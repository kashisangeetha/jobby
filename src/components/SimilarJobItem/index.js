import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const SimilarJobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = jobDetails
  return (
    <li className="job">
      <div className="con">
        <div className="title">
          <img
            src={companyLogoUrl}
            alt="similar job company logo"
            className="job"
          />
          <div className="container">
            <h1>{title}</h1>
            <div className="con">
              <BsStarFill className="icon" />
              <p>{rating}</p>
            </div>
          </div>
        </div>
        <h1>Description</h1>
        <p>{jobDescription}</p>
        <div className="employee">
          <div className="location">
            <MdLocationOn className="icon" />
            <p>{location}</p>
          </div>
          <div className="type">
            <BsFillBriefcaseFill className="icon" />
            <p>{employmentType}</p>
          </div>
        </div>
      </div>
    </li>
  )
}
export default SimilarJobItem
