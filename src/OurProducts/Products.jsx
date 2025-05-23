import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrand, fetchCategory, fetchProduct, fetchSubCategory } from '../action/ecomAction';
import { useLocation, useNavigate } from 'react-router-dom';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Bannerproducts from '../assets/Bannerproducts.jpg'


const Products = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();


    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        dispatch(fetchBrand());
        dispatch(fetchSubCategory());
        dispatch(fetchCategory());
    }, [dispatch]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        if (location.state?.selectedCategory) {
            setSelectedCategory(location.state.selectedCategory);
        }
    }, [location.state]);



    useEffect(() => {
        if (selectedCategory || selectedSubCategory || selectedBrand || debouncedQuery) {
            const query = {
                category: selectedCategory,
                sub_cat: selectedSubCategory,
                brand: selectedBrand,
                name: debouncedQuery,
            };
            dispatch(fetchProduct(query));
        }
    }, [selectedCategory, selectedSubCategory, selectedBrand, debouncedQuery, dispatch]);

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };

    const { brand, subcategory, category, productss } = useSelector((state) => state.ecomState);
    const Brands = brand?.brand || [];
    const Category = category?.category || [];
    const SubCategory = subcategory?.subcategory || [];
    const prdcts = productss?.productss || [];


    const handleViewClick = (pro) => {
        const brandId = pro?.brand;
        if (brandId === '6724c41a046fdd50c6c85161' || brandId === '6724c43e046fdd50c6c85168') {
            navigate(`/product_details/${pro?._id}`);
        } else {
            navigate(`/products/details/${pro?._id}`);
        }
    };

    // Function to scroll to the top if screen width is less than 768px
    const scrollToTopOnMobile = () => {
        if (window.innerWidth < 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleClearFilters = () => {
        setSelectedCategory('');
        setSelectedSubCategory('');
        setSelectedBrand('');
        setQuery('');

        dispatch(fetchProduct({
            category: '',
            sub_cat: '',
            brand: '',
            name: '',
        }));
    };



    return (
        <div>
            <div className="bg-cover bg-center relative z-1 text-center py-[60px] sm:min-h-[300px] md:py-[60px] lg:py-[170px]"
                style={{ backgroundImage: `url(${Bannerproducts})` }}>
                <div className="container mx-auto">
                    <h2 className="text-white text-[38px] md:text-[32px] mb-[15px] md:mb-[12px] uppercase font-bold">
                        Solutions
                    </h2>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[rgba(6,23,56,0.6)] to-[rgba(17,151,68,0.6)] z-[-1]" />
            </div>
            <div className='container mx-auto'>
                <section className="py-28 px-12">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap -mx-4">
                            {/* Sidebar Start */}
                            <div className="w-full lg:w-1/4 px-  order-1 lg:order-none">
                                <div className="shop-sidebar relative">

                                    <button
                                        onClick={handleClearFilters}
                                        className="w-full mb-6 bg-[#e0e0e0] text-[#333] hover:text-white py-2 px-4 rounded-lg hover:bg-[#81D8D0] transition duration-200 cursor-pointer"
                                    >
                                        <DeleteForeverOutlinedIcon /> Clear All Filters
                                    </button>

                                    {/* Brand Filter Sidebar */}
                                    <div className="shop-sidebar__box border border-gray-100 rounded-lg p-8 mb-8">
                                        <h6 className="text-xl border-b border-gray-100 pb-6 mb-6">Filter by Brand</h6>
                                        <ul className=" overflow-y-auto max-h-80 scrollbar-thin">
                                            {Brands.map((brand, index) => (
                                                <li className="mb-6" key={index}>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="brand"
                                                            id={`brand${index + 1}`}
                                                            value={brand._id}
                                                            checked={selectedBrand === brand._id}
                                                            // onChange={() => setSelectedBrand(brand._id)}
                                                            onChange={() => {
                                                                selectedBrand === brand?._id
                                                                    ? setSelectedBrand('') // Unselect if clicked again
                                                                    : setSelectedBrand(brand?._id);
                                                                scrollToTopOnMobile();
                                                            }}
                                                            onDoubleClick={() => setSelectedBrand('')} // Handle double-click to unselect
                                                        />
                                                        <label className="form-check-label ml-2" htmlFor={`brand${index + 1}`}>
                                                            {brand?.name}
                                                        </label>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>


                                    {/* SubCategory Filter Sidebar */}
                                    <div className="shop-sidebar__box border border-gray-100 rounded-lg p-8 mb-8">
                                        <h6 className="text-xl border-b border-gray-100 pb-6 mb-6">Filter by SubCategory</h6>
                                        <ul className=" overflow-y-auto max-h-[380px] scrollbar-thin">
                                            {SubCategory.map((subCategory, index) => (
                                                <li className="mb-6" key={index}>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="subCategory"
                                                            id={`subCategory${index + 1}`}
                                                            value={subCategory?._id}
                                                            checked={selectedSubCategory === subCategory?._id}
                                                            onChange={() => {
                                                                selectedSubCategory === subCategory?._id
                                                                    ? setSelectedSubCategory('') // Unselect if double-click
                                                                    : setSelectedSubCategory(subCategory?._id);
                                                                scrollToTopOnMobile();
                                                            }}
                                                            onDoubleClick={() => setSelectedSubCategory('')} // Handle double-click to unselect
                                                        />
                                                        <label className="form-check-label ml-2" htmlFor={`subCategory${index + 1}`}>
                                                            {subCategory?.name}
                                                        </label>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>


                                    {/* Product Category Sidebar */}
                                    <div className="shop-sidebar__box border border-gray-100 rounded-lg p-8 mb-8">
                                        <h6 className="text-xl border-b border-gray-100 pb-6 mb-6">Product Category</h6>
                                        <ul className=" overflow-y-auto max-h-[450px] scrollbar-thin">
                                            {Category.map((category, index) => (
                                                <li className="mb-6 " key={index}>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="category"
                                                            id={`category${index + 1}`}
                                                            value={category._id}
                                                            checked={selectedCategory === category._id}
                                                            onChange={() => {
                                                                selectedCategory === category._id
                                                                    ? setSelectedCategory('')
                                                                    : setSelectedCategory(category._id);
                                                                scrollToTopOnMobile();
                                                            }}
                                                        />
                                                        <label className="form-check-label ml-2 " htmlFor={`category${index + 1}`}>
                                                            {category.name}
                                                        </label>
                                                    </div>
                                                </li>
                                            ))}

                                        </ul>

                                    </div>


                                </div>
                            </div>
                            {/* Sidebar End */}

                            {/* Content Start */}
                            <div className="w-full lg:w-3/4 px-4">
                                {/* Top Start */}
                                <div className="flex flex-wrap justify-between items-center mb-10">
                                    <span className="text-gray-900">Showing {prdcts.length} results</span>
                                    <div className="mt-8 relative">
                                        <input
                                            type="text"
                                            placeholder="Search here..."
                                            style={{
                                                padding: '10px 10px 10px 30px',
                                                width: '100%',
                                                border: '1px solid #ccc',
                                                borderRadius: '5px',
                                                outline: 'none',
                                            }}
                                            value={query}
                                            onChange={handleSearchChange}
                                        />
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5 text-[#cc]" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* Top End */}

                                {/* Content Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {prdcts.map((pro, index) => (
                                        <div key={index} className="product-card h-full p-4 border border-gray-100 hover:border-blue-900 rounded-lg relative transition duration-200">
                                            <a className="product-card__thumb flex justify-center items-center bg-white rounded-lg relative">
                                                <img src={pro?.image} alt="Product" className="w-[250px] h-[231px] object-contain" />
                                                <span className="product-card__badge bg-primary-600 px-2 py-1 text-xs text-white absolute top-0 left-0">
                                                    Best Sale
                                                </span>
                                            </a>
                                            <div className="product-card__content mt-4">
                                                <h6 className="title text-lg font-semibold mt-3 mb-2">
                                                    <a className="link block text-ellipsis truncate overflow-hidden whitespace-nowrap cursor-pointer" onClick={() => handleViewClick(pro)}>
                                                        {pro?.name}
                                                    </a>
                                                </h6>
                                                <div className="product-card__price my-5">
                                                    <span className="text-gray-900 font-semibold text-lg"></span>
                                                </div>
                                                <div className='w-full'>
                                                    <button className="bg-gray-200 w-full text-black font-semibold py-2 px-4 rounded-lg hover:bg-blue-950 hover:text-white" onClick={() => handleViewClick(pro)}>
                                                        View
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Content End */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Products
