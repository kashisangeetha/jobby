import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="container">
      <h1 className="head">Find The Job That Fits Your Life</h1>
      <p className="para">Millions of People are searching</p>
      <Link to="/jobs">
        <button type="button" className="btn">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)
export default Home
