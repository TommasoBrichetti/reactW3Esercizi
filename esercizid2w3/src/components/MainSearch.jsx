import { useState } from 'react'
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FavouritesIcon from './FavouritesIcon'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux'
import { getJobsAction } from '../redux/actions'
import { FaUserAstronaut } from 'react-icons/fa'

const MainSearch = () => {

  const dispatch = useDispatch()

  const jobs = useSelector((state) => state.jobs.jobs)
  const jobsLoading = useSelector((state) => state.jobs.loading)

  const isUserLoggedin = !!useSelector((state) => state.user.userLogged)

  const [query, setQuery] = useState('')
 
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobsAction(query))
  }


  return (
    <Container>
      <Row>
        <Col xs={8} className="mx-auto my-3 text-center">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={2} className='d-flex align-items-center'>

          <Link to='/user' className='text-dark'>
          <FaUserAstronaut/>
          </Link>
          {isUserLoggedin ? (<Link to='/favourites' className='text-dark'>
            <FavouritesIcon />
          </Link>): (<div>pls log-in</div>)}
          
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {jobsLoading && <Spinner animation="border" variant="success" />}
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
