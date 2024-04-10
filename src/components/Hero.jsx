import trees from "../assets/matt-artz-nTRDnDdDYk8-unsplash.jpg"

const Hero = () => {
    return (
        <>
            <div>
                <img src={trees} alt="trees" />
                <div className="flex flex-col gap-4 items-center relative bottom-96 font-semibold text-lg text-white ">
                    <p className="text-4xl font-bold">Forest Monitoring System</p>
                    <p>Experience the Future of Conservation</p>
                    <p>Forest Sight Delivers Real-time Insights for Sustainable Resource Management.</p>
                </div>
            </div>
        </>
    )
}

export default Hero