import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

import pic1 from './img/1.webp'
import pic2 from './img/2.webp'
import pic3 from './img/3.webp'
import pic4 from './img/4.webp'
import pic5 from './img/5.webp'

export const CarouselBox = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src={pic1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src={pic2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src={pic4}
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src={pic5}
                    alt="Fifth slide"
                />
                <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
