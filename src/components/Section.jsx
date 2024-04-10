/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card1 from "../assets/_520be86a-9e63-4446-ab4c-94e902492282.jpg";
import Card2 from "../assets/_66b21c21-bb54-45a5-ba1e-e24229e7b1b9.jpg";
import Card3 from "../assets/_a3496f4a-9f67-4f7f-8fa7-15ba12c5f4fc.jpg";

const Section = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    }
    const CustomLeftArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute left-7 top-1/2 transform -translate-y-1/2 bg-green-600 rounded-full p-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" /></svg>
            </button>
        );
    };

    const CustomRightArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute right-7 top-1/2 transform -translate-y-1/2 bg-green-600 rounded-full p-2"
            >

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
            </button>
        );
    };

    return (
        <>
            <Carousel
                className='-mt-10'
                responsive={responsive}
                itemClass="carousel-item"
                infinite={false}
                draggable={false}
                showDots={false}
                autoPlay={false}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
            >
                <div className="carousel-item">
                    <img src={Card1} alt="Image 1" />
                </div>
                <div className="carousel-item">
                    <img src={Card2} alt="Image 2" />
                </div>
                <div className="carousel-item">
                    <img src={Card3} alt="Image 3" />
                </div>
                <div className="carousel-item">
                    <img src={Card3} alt="Image 4" />
                </div>
            </Carousel>
        </>
    )
}

export default Section;
