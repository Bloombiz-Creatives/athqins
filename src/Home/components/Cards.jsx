import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCard } from '../../action/ecomAction';

const Cards = () => {

    // const products = [
    //     {
    //         name: 'S60',
    //         description: 'Intelligence Empowers More',
    //         imgSrc: 'https://www.sonoscape.com/uploadfile/2020/0716/20200716110127968.jpg',
    //         alt: 'P60',
    //     },
    //     {
    //         name: 'P60 Exp',
    //         description: 'Intelligent Future Attainable',
    //         imgSrc: 'https://www.sonoscape.com/uploadfile/2018/1105/20181105090452716.jpg',
    //         alt: 'S50 Elite',
    //     },
    //     {
    //         name: 'P60',
    //         description: 'Intelligence Articulated',
    //         imgSrc: 'https://www.sonoscape.com/uploadfile/2020/0716/20200716110127968.jpg',
    //         alt: 'P60',
    //     },
    //     {
    //         name: 'S50 Elite',
    //         description: 'Discover and Embrace ELITE',
    //         imgSrc: 'https://www.sonoscape.com/uploadfile/2018/1105/20181105090452716.jpg',
    //         alt: 'S50 Elite',
    //     },
    // ];

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCard())
    },[dispatch])

    const {cards} = useSelector((state) => state.ecomState);
   const products = cards?.cards || []
    

  return (
    <div className='container mx-auto'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-12 mx-auto mt-8 p-2">
            {products.map((product, index) => (
                <a href="index-4.html" key={index} className="no-underline">
                    <div className="relative bg-white p-4 border border-gray-200 rounded-md text-center transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                            NEW
                        </div>
                        <img
                            src={product.image}
                            alt={product.alt}
                            className="max-w-4/5 h-auto mx-auto"
                        />
                        <div className="font-bold mt-2">{product.heading}</div>
                        <div className="text-sm text-gray-600">{product.text}</div>
                    </div>
                </a>
            ))}
        </div>
    </div>
  )
}

export default Cards
