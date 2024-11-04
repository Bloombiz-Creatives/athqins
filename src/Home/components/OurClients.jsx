import img1 from '../../assets/clients/ALMAS.png';
import img2 from '../../assets/clients/ASTER.png';
import img3 from '../../assets/clients/BANGLORE HSPTL.png';
import img4 from '../../assets/clients/BELIEVERS CHURCH.png';
import img5 from '../../assets/clients/BMH.png';
import img6 from '../../assets/clients/IQRA.png';
import img7 from '../../assets/clients/KMCT.png';
// import img8 from '../../assets/clients/LAKSHYA.png';
import img9 from '../../assets/clients/MAULANA.png';
import img10 from '../../assets/clients/MES.png';
import img11 from '../../assets/clients/MOTHER HOOD.png';
// import img12 from '../../assets/clients/MOTHER HOSPITAL.png';
import img13 from '../../assets/clients/SIMSRC.png';
import img14 from '../../assets/clients/SUT PATTOM.png';


const Images = [
    {
        logoImg: img1,
    },
    {
        logoImg: img2,
    },
    {
        logoImg: img3,
    },
    {
        logoImg: img4,
    },
    {
        logoImg: img5,
    },
    {
        logoImg: img6,
    },
    {
        logoImg: img7,
    },
    {
        logoImg: img13,
    },
    {
        logoImg: img9,
    },
    {
        logoImg: img10,
    },
    {
        logoImg: img11,
    },
    {
        logoImg: img14,
    },
    // {
    //     logoImg: img8,
    // },
    // {
    //     logoImg: img14,
    // },
   
];

const OurClients = () => {

    return (
        <div className="container mx-auto">
            <div className="px-12 py-1">
                <div className='flex flex-row gap-3 mt-20 p-2'>
                    <div className='bg-blue-900 h-10 w-1'></div>
                    <h2 className='uppercase text-[30px]  w-full  font-semibold font-sans '>OUR CLIENTS</h2>
                </div>
                <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 mb-12">
                    {Images.map((image, index) => (
                        <div key={index} className="flex items-center justify-center ">
                            <img
                                src={image.logoImg}
                                alt={`Client Logo ${index}`}
                                className="md:h-[80px] md:w-[160px] h-[50px] w-[100px] object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default OurClients
