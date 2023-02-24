import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './College.css'
import bg from '../assets/bg.jpg'
import it from '../assets/it.jpg'
import mech from '../assets/mech.jpg'




export default function College() {
    return (
        <div className='college'>
            <Link to='/college'>
                <h1>College</h1>

                <div className='college-cards'>
                    <div className="row">
                        <div className="col">
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={bg} />
                                <Card.Body>
                                    <Card.Title>Computer Science</Card.Title>

                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={it} />
                                <Card.Body>
                                    <Card.Title>Information Technology</Card.Title>

                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={mech} />
                                <Card.Body>
                                    <Card.Title>Mechanical</Card.Title>

                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={bg} />
                                <Card.Body>
                                    <Card.Title>Computer Science</Card.Title>

                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={it} />
                                <Card.Body>
                                    <Card.Title>Information Technology</Card.Title>

                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={mech} />
                                <Card.Body>
                                    <Card.Title>Mechanical</Card.Title>

                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>


            </Link>
        </div>
    )
}
