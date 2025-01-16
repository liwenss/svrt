import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";


export default function Pastevents() {
    return (

        <div>
        <p className="services-header">Voice of Customers</p>
        <Carousel>
            <Carousel.Item>
            <Carousel.Caption>
                </Carousel.Caption>
                <img
                    className="d-block w-100"
                    src='/past-event.png'
                    alt="First slide"
                />
                
            </Carousel.Item>

            <Carousel.Item>
            <Carousel.Caption>
                </Carousel.Caption>
                <img
                    className="d-block w-100"
                    src='/past-event.png'
                    alt="Second slide"
                />
              
            </Carousel.Item>

            <Carousel.Item>
            <Carousel.Caption>
                </Carousel.Caption>
                <img
                    className="d-block w-100"
                    src='/past-event.png'
                    alt="Third slide"
                />
                
            </Carousel.Item>
        </Carousel>
    </div>
    );

}
