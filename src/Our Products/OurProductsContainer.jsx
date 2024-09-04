import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrand, fetchCategory, fetchProduct, fetchSubCategory } from '../action/ecomAction';

const OurProductsContainer = () => {
  const dispatch = useDispatch();

  // State to hold selected filters
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Fetch brands, categories, and subcategories on component mount
  useEffect(() => {
    dispatch(fetchBrand());
    dispatch(fetchSubCategory());
    dispatch(fetchCategory());
  }, [dispatch]);


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // 300ms debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [query]);


  useEffect(() => {
    const query = {
      category: selectedCategory,
      sub_cat: selectedSubCategory,
      brand: selectedBrand,
      name: debouncedQuery,
    };

    dispatch(fetchProduct(query));
  }, [selectedCategory, selectedSubCategory, selectedBrand, debouncedQuery, dispatch]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // Extract data from Redux state
  const { brand, subcategory, category, productss } = useSelector((state) => state.ecomState);
  const Brands = brand?.brand || [];
  const Category = category?.category || [];
  const SubCategory = subcategory?.subcategory || [];
  const prdcts = productss?.productss || [];

  return (
    <div className='container mx-auto'>
      <section className="py-28 px-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Sidebar Start */}
            <div className="w-full lg:w-1/4 px-4">
              <div className="shop-sidebar relative">
                {/* Product Category Sidebar */}
                <div className="shop-sidebar__box border border-gray-100 rounded-lg p-8 mb-8">
                  <h6 className="text-xl border-b border-gray-100 pb-6 mb-6">Product Category</h6>
                  <ul className="max-h-135 overflow-y-auto scrollbar-thin">
                    {Category.map((category, index) => (
                      <li className="mb-6" key={index}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            id={`category${index + 1}`}
                            value={category?._id}
                            checked={selectedCategory === category?._id}
                            onChange={() => setSelectedCategory(category?._id)}
                          />
                          <label className="form-check-label ml-2" htmlFor={`category${index + 1}`}>
                            {category?.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SubCategory Filter Sidebar */}
                <div className="shop-sidebar__box border border-gray-100 rounded-lg p-8 mb-8">
                  <h6 className="text-xl border-b border-gray-100 pb-6 mb-6">Filter by SubCategory</h6>
                  <ul className="max-h-135 overflow-y-auto scrollbar-thin">
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
                            onChange={() => setSelectedSubCategory(subCategory?._id)}
                          />
                          <label className="form-check-label ml-2" htmlFor={`subCategory${index + 1}`}>
                            {subCategory?.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Brand Filter Sidebar */}
                <div className="shop-sidebar__box border border-gray-100 rounded-lg p-8 mb-8">
                  <h6 className="text-xl border-b border-gray-100 pb-6 mb-6">Filter by Brand</h6>
                  <ul className="max-h-135 overflow-y-auto scrollbar-thin">
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
                            onChange={() => setSelectedBrand(brand._id)}
                          />
                          <label className="form-check-label ml-2" htmlFor={`brand${index + 1}`}>
                            {brand?.name}
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
                  <div key={index} className="product-card h-full p-4 border border-gray-100 hover:border-emerald-400 rounded-lg relative transition duration-200">
                    <a className="product-card__thumb flex justify-center items-center bg-white rounded-lg relative">
                      <img src={pro?.image} alt="Product" className="w-[250px] h-[231px] object-contain" />
                      <span className="product-card__badge bg-primary-600 px-2 py-1 text-xs text-white absolute top-0 left-0">
                        Best Sale
                      </span>
                    </a>
                    <div className="product-card__content mt-4">
                      <h6 className="title text-lg font-semibold mt-3 mb-2">
                        <a href="aeonmed.html" className="link text-ellipsis overflow-hidden whitespace-nowrap">
                          {pro?.name}
                        </a>
                      </h6>
                      <div className="product-card__price my-5">
                        <span className="text-gray-900 font-semibold text-lg">₹20,000</span>
                      </div>
                      <div className='w-full'>
                        <button className="bg-gray-200 w-full text-black font-semibold py-2 px-4 rounded-lg hover:bg-green-500 hover:text-white">
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
  );
};

export default OurProductsContainer;


