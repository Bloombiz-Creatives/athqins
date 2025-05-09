import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Machinaries } from '../../action/ecomAction';
import { useNavigate } from 'react-router-dom';

const Cards = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Machinaries())
    }, [dispatch])

    const { Machinary } = useSelector((state) => state.ecomState);
    const products = Machinary?.Machinary || [];


    const handleViewClick = (pro) => {
        const brandId = pro?.brand;

        if (brandId === '6724c41a046fdd50c6c85161' || brandId === '6724c43e046fdd50c6c85168') {
            navigate(`/product_details/${pro?._id}`);
        } else {
            navigate(`/products/details/${pro?._id}`);
        }
    };


    return (
        <div className='container mx-auto'>
            <div className='px-4 md:px-8 lg:px-16'>
                {/* <h2 className='relative flex justify-center items-center mt-4 md:mt-6 lg:mt-8 text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-semibold text-gray-900 text-center'>
                    Empowering Healthcare with Advanced Hospital Machinery
                </h2> */}

                <div className="text-center text-4xl font-semibold mt-8">Empowering Healthcare</div>
                <div className="text-center text-2xl font-medium text-opacity-70 mb-8">Innovating Medical Technology for a Healthier Tomorrow</div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-12 mx-auto mt-8 p-2">
                {products.map((product, index) => (
                    <div key={index} className='cursor-pointer' onClick={() => handleViewClick(product)}>
                        <div className="relative bg-white p-4 border border-gray-200 rounded-md text-center transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                NEW
                            </div>
                            <img
                                src={product.image}
                                alt={product.alt}
                                className="max-w-4/5 h-auto mx-auto"
                            />
                            <div className="font-bold mt-2">{product?.name}</div>
                            <div className="text-sm text-gray-600  block overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product?.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;
