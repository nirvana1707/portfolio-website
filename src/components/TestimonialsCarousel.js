import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../images/portfolio/avatars/avatar-1.png"
import avatar2 from "../images/portfolio/avatars/avatar-2.png"
import avatar3 from "../images/portfolio/avatars/avatar-3.png"
import avatar4 from "../images/portfolio/avatars/avatar-4.png"


const TestimonialsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={2000}
        >
            <div>
                <img src={avatar1} alt="John Doe 1..." />
                <div className="myCarousel">
                    <h3>John Doe 1 </h3>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface </p>
                </div>
            </div>
            <div>
                <img src={avatar2} alt="John Doe 2..." />
                <div className="myCarousel">
                    <h3>John Doe 2 </h3>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface </p>
                </div>
            </div>
            <div>
                <img src={avatar3} alt="John Doe 3..." />
                <div className="myCarousel">
                    <h3>John Doe 3 </h3>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface </p>
                </div>
            </div>
            <div>
                <img src={avatar4} alt="John Doe 4..." />
                <div className="myCarousel">
                    <h3>John Doe 4 </h3>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or a typeface </p>
                </div>
            </div>
        </Carousel>
    )
}

export default TestimonialsCarousel;
