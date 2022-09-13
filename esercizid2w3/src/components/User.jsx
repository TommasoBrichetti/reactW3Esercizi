import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logInAction } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {  FaHome  } from 'react-icons/fa'


const User = (props) => {

    const [query, setQuery] = useState('')

    const isUserLoggedin = !!useSelector((state) => state.user.userLogged)

    const user = useSelector((state) => state.user.userLogged)

    const dispach = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setQuery(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        dispach(logInAction(query))
        navigate('/')
    }

    const logOut = () => {
        // dispach(logOutAction())
    }

    return (
        <Container>
            <Row>
            <Col sm={12}>
                <Link to='/' className='text-dark'>
                    <FaHome className='m-4'/>
                </Link>
            </Col></Row>
            <Row>
                {!isUserLoggedin ? (
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail" value={query}
                            onChange={handleChange}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                ) : (
                <Col>
                    <p>{user}</p>
                    <button onClick={logOut}>Log-Out</button>
                </Col>)}
                
            </Row>
        </Container>
    )
}
export default User