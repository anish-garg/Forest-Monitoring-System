/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card1 from "../assets/_520be86a-9e63-4446-ab4c-94e902492282.jpg";
import Card2 from "../assets/_66b21c21-bb54-45a5-ba1e-e24229e7b1b9.jpg";
import Card3 from "../assets/_a3496f4a-9f67-4f7f-8fa7-15ba12c5f4fc.jpg";
import { NavLink } from 'react-router-dom';

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
                className="absolute left-7 top-96 transform -translate-y-1/2 bg-green-600 rounded-full p-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" /></svg>
            </button>
        );
    };

    const CustomRightArrow = ({ onClick }) => {
        return (
            <button
                onClick={onClick}
                className="absolute right-7 top-96 transform -translate-y-1/2 bg-green-600 rounded-full p-2"
            >

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" /></svg>
            </button>
        );
    };

    return (
        <>
            <Carousel
                className='-mt-36'
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
                    <div className='flex flex-col gap-5 relative top-44 left-2 z-10'>
                        <h3 className='text-2.5xl/[30px] font-semibold'>Embark on a Data-driven Voyage <br /> into Global Forests</h3>
                        <p className='font-medium'>Forest Sight invites users to immerse themselves in a journey <br /> of exploration through the world's forests using detailed <br /> data analysis.</p>
                    </div>
                    <img className='opacity-55 z-0' src={Card1} alt="Image 1" />
                    <NavLink to="/map"><button className='relative bottom-16 left-5 bg-green-700 text-white w-32 h-10 rounded-full hover:bg-green-900'>Explore Data</button></NavLink>
                </div>
                <div className="carousel-item mt-6">
                    <div className='flex flex-col gap-5 relative top-[9.5rem] left-2 z-10'>
                        <h3 className='text-2.5xl/[30px] font-semibold'>Stay informed against tropical <br /> deforestation's latest impact.</h3>
                        <p className='font-medium'>Recent satellite data reveals alarming rates of tropical <br /> deforestation, highlighting urgent conservation needs.</p>
                    </div>
                    <img className='opacity-55 z-0' src={Card2} alt="Image 2" />
                    <button className='relative bottom-16 left-5 text-lg bg-green-700 text-white w-64 h-10 rounded-full  hover:bg-green-900'>View Deforestation Alerts</button>
                </div>
                <div className="carousel-item -mt-8">
                    <div className='flex flex-col gap-5 relative top-52 left-2 z-10'>
                        <h3 className='text-2.5xl/[30px] font-semibold'>Your Comprehensive Dashboard <br /> for Accessing Real-Time Forest <br /> Data on the go</h3>
                        <p className='font-medium'>Forest Insight offers a user-friendly interface to explore real- <br />time forest data, including deforestation rates, climate <br /> change and forest fires. </p>
                    </div>
                    <img className='opacity-55 z-0' src={Card3} alt="Image 3" />
                    <button className='relative bottom-16 left-5 text-lg bg-green-700 text-white w-40 h-10 rounded-full  hover:bg-green-900'>View Dashboard</button>
                </div>
                <div className="carousel-item -mt-1">
                    <div className='flex flex-col gap-5 relative top-44 left-2 z-10'>
                        <h3 className='text-2.5xl/[30px] font-semibold'>Forest Sight: Stay Ahead with <br /> Real-Time Forest Alerts</h3>
                        <p className='font-medium'>Forest Sight provides up-to-the-minute forest alerts, <br /> empowering stakeholders to respond swiftly to threats like <br /> deforestation, climate change and forest fires.  </p>
                    </div>
                    <img className='opacity-55 z-0' src={Card3} alt="Image 3" />
                    <button className='relative bottom-16 left-5 text-lg bg-green-700 text-white w-32 h-10 rounded-full  hover:bg-green-900'>About</button>
                </div>
            </Carousel>
        </>
    )
}

export default Section;
