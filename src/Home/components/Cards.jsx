import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  Machinaries } from '../../action/ecomAction';
import { useNavigate } from 'react-router-dom';

export const Cards = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Machinaries())
    }, [dispatch])

    const { Machinary } = useSelector((state) => state.ecomState);
    const products = Machinary?.Machinary || [];
    console.log();
    

    const handleViewClick = (pro) => {
        const brandId = pro?.brand;
        console.log('Product:', pro);
        console.log('Brand ID:', brandId);
<<<<<<< HEAD
<<<<<<< HEAD
        if (brandId === '66fa5515128cbdb0a930d04e  ' || brandId === '66fa552c128cbdb0a930d052') {
=======
        if (brandId === '66fa5515128cbdb0a930d04e ' || brandId === '66fa552c128cbdb0a930d052') {
>>>>>>> be212c79528baa4b5e56b014513b5b4a016458ff
=======
        if (brandId === '66fa5515128cbdb0a930d04e' || brandId === '66fa552c128cbdb0a930d052') {
>>>>>>> 103add4c43c7e6f536d5eba3226dfc6c2fd3c2ee
          navigate(`/product_details/${pro?._id}`); 
        } else {
          navigate(`/products/details/${pro?._id}`); 
        }
      };


    return (
        <div className='container mx-auto'>
            <div className='px-4 md:px-8 lg:px-16'>
                <h2 className='relative flex justify-center items-center mt-4 md:mt-6 lg:mt-8 text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-semibold text-gray-900 text-center'>
                    Empowering Healthcare with Advanced Hospital Machinery
                </h2>
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
                            <div className="text-sm text-gray-600">{product?.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// export default Cards
