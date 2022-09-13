import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {  FaHome  } from 'react-icons/fa'
import { removeToFavActions } from '../redux/actions'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Favourites = () => {

    const jobsContent = useSelector((state) => state.fav.content)

    const dispach = useDispatch()
    const navigate = useNavigate()

    const isUserLoggedin = !!useSelector((state) => state.user.userLogged)

    useEffect(() => {
        if (!isUserLoggedin) {
          navigate('/')
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <Row>
            <Col sm={12}>
                <Link to='/' className='text-dark'>
                    <FaHome className='m-4'/>
                </Link>
            </Col>
            {jobsContent.length === 0 && (
                <Col sm={12} className='text-center'>
                    <h2>Nessun Preferito</h2>
                </Col>)}
            <Col sm={12}>
                <ul style={{ listStyle: 'none' }}>
                    {jobsContent.map((job, i) => (
                        <li key={i} className="my-4 p-3" style={{ border: '1px solid #000', borderRadius: 4 }}>
                            <Link to={`/${job.company_name}`}><h2>{job.company_name}</h2></Link>
                            <h3>{job.title} - {job.job_type}</h3>
                            <Button variant="danger" onClick={() => {
                                dispach(removeToFavActions(i))
                            }}>
                                <FaTrash />
                            </Button>
                        </li>
                    ))}
                </ul>
            </Col>
        </Row>
    )
}

export default Favourites