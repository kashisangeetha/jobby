import {Link} from 'react-router-dom'
import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const JobCard = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    id,
  } = jobData
  return (
    <Link to={`/jobs/${id}`} className="link">
      <li className="item">
        <div className="container">
          <div className="logo">
            <img src={companyLogoUrl} alt="company logo" className="logo" />
            <div className="title-c">
              <h1>{title}</h1>
              <div className="con">
                <BsStarFill className="icon" />
                <p>{rating}</p>
              </div>
            </div>
          </div>
          <div className="location">
            <div className="employee">
              <div className="con">
                <MdLocationOn className="icon" />
                <p>{location}</p>
              </div>
              <div className="type">
                <BsFillBriefcaseFill className="brief" />
                <p>{employmentType}</p>
              </div>
            </div>
            <p>{packagePerAnnum}</p>
          </div>
        </div>
        <hr className="line" />
        <h1>Description</h1>
        <p>{jobDescription}</p>
      </li>
    </Link>
  )
}
export default JobCard
