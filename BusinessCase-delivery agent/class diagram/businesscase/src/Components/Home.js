import React from 'react'

import { Nav, Navbar, Carousel } from 'react-bootstrap';
import image03 from './assests/image03.jpg';
import image02 from './assests/image02.jpg';
import image01 from './assests/image01.jpg';

export default function Home() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={image03}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3> */}
                        <p>welcome to the page.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                       // src="holder.js/600x200?text=Second slide&bg=282c34"
                        src={image02}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3> */}
                        <p>welcome to the page</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                       // src="holder.js/800x400?text=Third slide&bg=20232a"
                        src={image01}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3> */}
                       <p>welcome to the page</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        </div>
    )
}
