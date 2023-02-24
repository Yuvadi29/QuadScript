import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bg from '../assets/bg.jpg'
import it from '../assets/it.jpg'
import mech from '../assets/mech.jpg'
import { Link } from 'react-router-dom'


export default function Department() {
  return (
    <Link to='/department'>
        <div>
            <div className="carousel">
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={it}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={mech}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={bg}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </Link>
  )
}