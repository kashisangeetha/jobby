import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home">
      <div className="con">
        <h1>Find The Job That Fits Your Life</h1>
        <p>Millions of people are searching for jobs</p>
        <Link to="/jobs">
          <button type="button" className="btn">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </div>
)
export default Home
