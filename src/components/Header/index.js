import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>

          <ul className="icon">
            <li>
              <Link to="/">
                <AiFillHome className="link" />
              </Link>
            </li>
            <li>
              <Link to="/jobs">
                <BsFillBriefcaseFill className="link" />
              </Link>
            </li>
            <li>
              <button type="button" className="mobile" onClick={onClickLogout}>
                <FiLogOut />
              </button>
            </li>
          </ul>
        </div>

        <div className="logo">
          <Link to="/">
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="menu">
            <li className="item">
              <Link to="/" className="link">
                Home
              </Link>
            </li>

            <li className="item">
              <Link to="/jobs" className="link">
                Jobs
              </Link>
            </li>
          </ul>
          <button type="button" className="logout" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
