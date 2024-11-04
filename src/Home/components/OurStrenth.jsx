import im1 from "../../assets/strengths/reliable.png";
import im2 from "../../assets/strengths/quality.png";
import im3 from "../../assets/strengths/economy.png";
import im4 from "../../assets/strengths/flexible.png";

const OurStrenth = () => {

    const features = [
        {
            title: 'Enduring Integrity',
            description: "Trust is paramount. We operate ethically and transparently, building lasting partnerships",
            imgSrc: im1,
            alt: 'Reliable',
        },
        {
            title: 'Unmatched Quality',
            description: "We deliver premium equipment and exceptional service, minimizing downtime and maximizing your productivity.",
            imgSrc: im2,
            alt: 'Quality',
        },
        {
            title: 'Empowered Expertise',
            description:"We invest in our team's growth, providing you with experts dedicated to exceeding your expectations.",
            imgSrc: im4,
            alt: 'Flexible',
        },
        {
            title: 'Economy',
            description: "Our manufacturing process focuses on delivering hospital machinery that balances quality with cost-effectiveness. ",
            imgSrc: im3,
            alt: 'Economy',
        },
    ];

    return (
        <div className='container mx-auto'>
            <div className="py-10  md:py-20 mt-5 px-8 ">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-gray-800">Our Strengths</h2>
                </div>
                <div className="flex flex-wrap md:justify-between justify-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex-basis-[calc(25%-20px)] text-center mb-8  ">
                            <div className="mb-4 flex justify-center items-center">
                                <img
                                    src={feature.imgSrc}
                                    alt={feature.alt}
                                    className="w-16 h-16 object-cover object-center"
                                    style={{ width: '64px', height: '64px' }} // Fixed width and height
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600  md:w-[260px]">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurStrenth
