const Images = [
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
    {
        logoImg: 'img'
    },
]


const OurClients = () => {

    return (
        <div className="container mx-auto">
            <div className="px-12 py-1">
                <div className='flex flex-row gap-3 mt-20 p-2'>
                    <div className='bg-blue-900 h-10 w-1'></div>
                    <h2 className='uppercase text-[30px]  w-full  font-semibold font-sans '>OUR CLIENTS</h2>
                </div>
                <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
                    {Images.map((image, index) => (
                        <div key={index} className="flex items-center justify-center ">
                            <img
                                src={image.logoImg}
                                alt={`Client Logo ${index}`}
                                className="h-20 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default OurClients
