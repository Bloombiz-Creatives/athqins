// import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
// import ViewCompactIcon from '@mui/icons-material/ViewCompact';

// const OurProductsContainer = () => {
//   console.log('OurProducts component rendered');

//   return (
//     <div className='container mx-auto'>
//       <section className=" py-28 px-12">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap -mx-4">
//             {/* Sidebar Start */}
//             <div className="w-full lg:w-1/4 px-4">
//               <div className="shop-sidebar relative">
//                 <button
//                   type="button"
//                   className="shop-sidebar__close lg:hidden flex items-center justify-center w-8 h-8 border border-gray-100 rounded-full hover:bg-main-600 absolute right-0 top-2.5 hover:text-white hover:border-main-600"
//                 >
//                   <i className="ph ph-x"></i>
//                 </button>

//                 <div className="shop-sidebar__box border border-gray-100 rounded-lg p-8 mb-8">
//                   <h6 className="text-xl border-b border-gray-100 pb-6 mb-6">Product Category</h6>
//                   <ul className="max-h-135 overflow-y-auto scrollbar-thin">
//                     {['ICU', 'NICU', 'CARDIOLOGY', 'OPERATION THEATRE', 'CONSUMABLES', 'REFURBISHED', 'ULTRA SOUND'].map(
//                       (category, index) => (
//                         <li className="mb-6" key={index}>
//                           <div className="form-check">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name="color"
//                               id={`color${index + 1}`}
//                             />
//                             <label
//                               className="form-check-label ml-2"
//                               htmlFor={`color${index + 1}`}
//                             >
//                               {category}
//                             </label>
//                           </div>
//                         </li>
//                       )
//                     )}
//                   </ul>
//                 </div>

//                 <div className="shop-sidebar__box border border-gray-100 rounded-lg p-8 mb-8">
//                   <h6 className="text-xl border-b border-gray-100 pb-6 mb-6">Filter by SubCategory</h6>
//                   <ul className="max-h-135 overflow-y-auto scrollbar-thin">
//                     {['Patient monitor', 'Modular patient monitor', 'Vital sign monitor', 'Hand held pulse oximeter', 'Ecg machine', 'Central monitoring system', 'Edan ABG machine'].map(
//                       (subCategory, index) => (
//                         <li className="mb-6" key={index}>
//                           <div className="form-check">
//                             <input
//                               className="form-check-input"
//                               type="radio"
//                               name="color"
//                               id={`color${index + 1}`}
//                             />
//                             <label
//                               className="form-check-label ml-2"
//                               htmlFor={`color${index + 1}`}
//                             >
//                               {subCategory}
//                             </label>
//                           </div>
//                         </li>
//                       )
//                     )}
//                   </ul>
//                 </div>

//                 <div className="shop-sidebar__box border border-gray-100 rounded-lg p-8 mb-8">
//                   <h6 className="text-xl border-b border-gray-100 pb-6 mb-6">Filter by Brand</h6>
//                   <ul className="max-h-135 overflow-y-auto scrollbar-thin">
//                     {['SONOSCAPE', 'EDAN', 'MAGNAMED', 'AEONMED'].map((brand, index) => (
//                       <li className="mb-6" key={index}>
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             name="brand"
//                             id={`brand${index + 1}`}
//                           // onClick={() => window.location.href = `${brand.toLowerCase()}.html`}
//                           />
//                           <label className="form-check-label ml-2" htmlFor={`brand${index + 1}`}>
//                             {brand}
//                           </label>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="shop-sidebar__box rounded-lg">
//                   <img src="/images/newone.jpegf" alt="Sidebar Image" className="rounded-lg" />
//                 </div>
//               </div>
//             </div>
//             {/* Sidebar End */}

//             {/* Content Start */}
//             <div className="w-full lg:w-3/4 px-4">
//               {/* Top Start */}
//               <div className="flex flex-wrap justify-between items-center mb-10">
//                 <span className="text-gray-900">Showing 1-20 of 85 result</span>
//                 <div className="flex items-center gap-4">
//                   <div className="flex gap-4">
//                     <button
//                       type="button"
//                       className="w-11 h-11 flex justify-center items-center border border-gray-100 rounded text-2xl hover:bg-[#004b87] hover:text-white"
//                     >
//                       <GridViewOutlinedIcon />
//                     </button>
//                     <button
//                       type="button"
//                       className="w-11 h-11 flex justify-center items-center border border-main-600 text-black bg-main-600 rounded text-2xl hover:bg-[#004b87] hover:text-white"
//                     >
//                       <ViewCompactIcon className='w-10 h-10' />
//                     </button>
//                   </div>
//                   <div className="flex items-center gap-1 text-gray-500 text-sm">
//                     <label htmlFor="sorting" className="flex-shrink-0">Sort by:</label>
//                     <select
//                       className="form-control common-input px-3 py-3 rounded text-sm"
//                       id="sorting"
//                     >
//                       <option value="1" selected>Popular</option>
//                       <option value="1">Latest</option>
//                       <option value="1">Trending</option>
//                       <option value="1">Matches</option>
//                     </select>
//                   </div>
//                   <button
//                     type="button"
//                     className="w-11 h-11 lg:hidden flex justify-center items-center border border-gray-100 rounded text-2xl"
//                   >
//                     <i className="ph-bold ph-funnel"></i>
//                   </button>
//                 </div>
//               </div>
//               {/* Top End */}

//               {/* Content Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <div className="product-card h-full p-4 border border-gray-100 hover:border-emerald-400 rounded-lg relative transition duration-200">
//                   <a
//                     href="aeonmed.html"
//                     className="product-card__thumb flex justify-center items-center bg-gray-50 rounded-lg relative"
//                   >
//                     <img src="/images/aeo/a1.jpg" alt="Product" className="w-auto max-w-full" />
//                     <span className="product-card__badge bg-primary-600 px-2 py-1 text-xs text-white absolute top-0 left-0">
//                       Best Sale
//                     </span>
//                   </a>
//                   <div className="product-card__content mt-4">
//                     <h6 className="title text-lg font-semibold mt-3 mb-2">
//                       <a href="aeonmed.html" className="link text-ellipsis overflow-hidden whitespace-nowrap">
//                         Aeonmed 5250
//                       </a>
//                     </h6>
//                     <div className="flex items-center mb-5 mt-4 gap-1">
//                       <span className="text-xs font-medium text-gray-500">4.8</span>
//                       <span className="text-lg font-medium text-yellow-600"><i className="ph-fill ph-star"></i></span>
//                       <span className="text-xs font-medium text-gray-500">(17k)</span>
//                     </div>
//                     <div className="mt-2">
//                       <div className="w-full bg-gray-300 rounded-full h-1">
//                         <div
//                           className="bg-main-600 rounded-full h-full"
//                           style={{ width: '35%' }}
//                         ></div>
//                       </div>
//                       <span className="text-gray-900 text-xs font-medium mt-2 block">Sold: 18/35</span>
//                     </div>

//                     <div className="product-card__price my-5">
//                       <span className="text-gray-400 text-md font-semibold line-through">
//                         $28.99
//                       </span>
//                       <span className="text-heading text-md font-semibold">
//                         $14.99 <span className="text-gray-500 font-normal">/Qty</span>
//                       </span>
//                     </div>
//                     <div className='w-full'>
//                       <button className="bg-gray-200 w-full text-black font-semibold py-2 px-4 rounded-lg hover:bg-green-500 hover:text-white">
//                         View
//                       </button>                
//                         </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Content End */}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default OurProductsContainer




import React, { useState } from 'react';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';

const OurProductsContainer = () => {
  console.log('OurProducts component rendered');

  // State to manage selected sort option
  const [sortOption, setSortOption] = useState("1");

  return (
    <div className='container mx-auto'>
      <section className="py-28 px-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Sidebar Start */}
            <div className="w-full lg:w-1/4 px-4">
              <div className="shop-sidebar relative">
                <button
                  type="button"
                  className="shop-sidebar__close lg:hidden flex items-center justify-center w-8 h-8 border border-gray-100 rounded-full hover:bg-main-600 absolute right-0 top-2.5 hover:text-white hover:border-main-600"
                >
                  <i className="ph ph-x"></i>
                </button>

                {/* Product Category Sidebar */}
                <div className="shop-sidebar__box border border-gray-100 rounded-lg p-8 mb-8">
                  <h6 className="text-xl border-b border-gray-100 pb-6 mb-6">Product Category</h6>
                  <ul className="max-h-135 overflow-y-auto scrollbar-thin">
                    {['ICU', 'NICU', 'CARDIOLOGY', 'OPERATION THEATRE', 'CONSUMABLES', 'REFURBISHED', 'ULTRA SOUND'].map(
                      (category, index) => (
                        <li className="mb-6" key={index}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="category"
                              id={`category${index + 1}`}
                            />
                            <label
                              className="form-check-label ml-2"
                              htmlFor={`category${index + 1}`}
                            >
                              {category}
                            </label>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* SubCategory Filter Sidebar */}
                <div className="shop-sidebar__box border border-gray-100 rounded-lg p-8 mb-8">
                  <h6 className="text-xl border-b border-gray-100 pb-6 mb-6">Filter by SubCategory</h6>
                  <ul className="max-h-135 overflow-y-auto scrollbar-thin">
                    {['Patient monitor', 'Modular patient monitor', 'Vital sign monitor', 'Hand held pulse oximeter', 'Ecg machine', 'Central monitoring system', 'Edan ABG machine'].map(
                      (subCategory, index) => (
                        <li className="mb-6" key={index}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="subCategory"
                              id={`subCategory${index + 1}`}
                            />
                            <label
                              className="form-check-label ml-2"
                              htmlFor={`subCategory${index + 1}`}
                            >
                              {subCategory}
                            </label>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Brand Filter Sidebar */}
                <div className="shop-sidebar__box border border-gray-100 rounded-lg p-8 mb-8">
                  <h6 className="text-xl border-b border-gray-100 pb-6 mb-6">Filter by Brand</h6>
                  <ul className="max-h-135 overflow-y-auto scrollbar-thin">
                    {['SONOSCAPE', 'EDAN', 'MAGNAMED', 'AEONMED'].map((brand, index) => (
                      <li className="mb-6" key={index}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="brand"
                            id={`brand${index + 1}`}
                          />
                          <label className="form-check-label ml-2" htmlFor={`brand${index + 1}`}>
                            {brand}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="shop-sidebar__box rounded-lg">
                  <img src="/images/newone.jpegf" alt="Sidebar Image" className="rounded-lg" />
                </div>
              </div>
            </div>
            {/* Sidebar End */}

            {/* Content Start */}
            <div className="w-full lg:w-3/4 px-4">
              {/* Top Start */}
              <div className="flex flex-wrap justify-between items-center mb-10">
                <span className="text-gray-900">Showing 1-20 of 85 result</span>
                <div className="flex items-center gap-4">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="w-11 h-11 flex justify-center items-center border border-gray-100 rounded text-2xl hover:bg-[#004b87] hover:text-white"
                    >
                      <GridViewOutlinedIcon />
                    </button>
                    <button
                      type="button"
                      className="w-11 h-11 flex justify-center items-center border border-main-600 text-black bg-main-600 rounded text-2xl hover:bg-[#004b87] hover:text-white"
                    >
                      <ViewCompactIcon className='w-10 h-10' />
                    </button>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <label htmlFor="sorting" className="flex-shrink-0">Sort by:</label>
                    <select
                      className="form-control common-input px-3 py-3 rounded text-sm"
                      id="sorting"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                    >
                      <option value="1">Popular</option>
                      <option value="2">Latest</option>
                      <option value="3">Trending</option>
                      <option value="4">Matches</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="w-11 h-11 lg:hidden flex justify-center items-center border border-gray-100 rounded text-2xl"
                  >
                    <i className="ph-bold ph-funnel"></i>
                  </button>
                </div>
              </div>
              {/* Top End */}

              {/* Content Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="product-card h-full p-4 border border-gray-100 hover:border-emerald-400 rounded-lg relative transition duration-200">
                  <a
                    href="aeonmed.html"
                    className="product-card__thumb flex justify-center items-center bg-gray-50 rounded-lg relative"
                  >
                    <img src="/images/aeo/a1.jpg" alt="Product" className="w-auto max-w-full" />
                    <span className="product-card__badge bg-primary-600 px-2 py-1 text-xs text-white absolute top-0 left-0">
                      Best Sale
                    </span>
                  </a>
                  <div className="product-card__content mt-4">
                    <h6 className="title text-lg font-semibold mt-3 mb-2">
                      <a href="aeonmed.html" className="link text-ellipsis overflow-hidden whitespace-nowrap">
                        Aeonmed 5250
                      </a>
                    </h6>
                    <div className="flex items-center mb-5 mt-4 gap-1">
                      <span className="text-xs font-medium text-gray-500">4.8</span>
                      <span className="text-lg font-medium text-yellow-600"><i className="ph-fill ph-star"></i></span>
                      <span className="text-xs font-medium text-gray-500">(17k)</span>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-300 rounded-full h-1">
                        <div
                          className="bg-main-600 rounded-full h-full"
                          style={{ width: '35%' }}
                        ></div>
                      </div>
                      <span className="text-gray-900 text-xs font-medium mt-2 block">Sold: 18/35</span>
                    </div>

                    <div className="product-card__price my-5">
                      <span className="text-gray-900 font-semibold text-lg">₹20,000</span>
                    </div>

                    <a href="cart.html" className="btn btn-primary">
                      <i className="ph-plus"></i> Add to Cart
                    </a>
                  </div>
                </div>

                {/* More product cards can go here */}
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
