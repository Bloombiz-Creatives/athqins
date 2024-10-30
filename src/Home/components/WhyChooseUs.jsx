// import { useState } from 'react';
import why from '../../assets/why.jpg';
import y1 from '../../assets/y1.png';
import y2 from '../../assets/y2.png';
import y3 from '../../assets/y3.png';

const WhyChooseUs = () => {



  return (
    <section className="">
      <div
        className='bg-black lg:bg-lg-gradient'
      //  style={{
      //   background: 'linear-gradient(90deg, #000 50%, #F7F7F7 50%)'
      // }}
      >
        <div className='container mx-auto md:py-16 md:px-16 py-6 px-6 2.5xl:px-[560px]'>
          <h2 className='font-extrabold text-white text-[32px] py-100 box-border mb-2 leading-tight '>Why Choose Us </h2>
          <p className='text-[#fff] opacity-70'>We offer perfect real estate services</p>
          <div className='lg:flex  gap-10  mt-14'>
            <div>
              <img src={why} alt="" className='lg:h-[540px] xl:w-full lg:w-[520px]  object-cover md:h-[240px] md:w-[690px]' />
            </div>
            <div>
              <div className="max-w-xl lg:mx-auto md:p-8 p-2">
                <div className="space-y-8">
                  <div className="flex items-start lg:space-x-4 leading-6">
                    <img
                      src={y1}
                      alt="Mission Icon"
                      className="w-12 h-12 lg:flex hidden"
                    />
                    <div>
                      <h3 className="text-xl font-extrabold lg:text-black text-white">Mission</h3>
                      <p className="text-[#999] lg:w-[290px]">
                        We foster healthcare innovation by providing comprehensive bio-medical solution with exceptional service and application support.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start lg:space-x-4 leading-6">
                    <img
                      src={y2}
                      alt="Vision Icon"
                      className="w-12 h-12 lg:flex hidden"
                    />
                    <div>
                      <h3 className="text-xl font-extrabold lg:text-black text-white">Vision</h3>
                      <p className="text-[#999] lg:w-[290px]">
                        Empowering healthcare. Every step of the way. As your trusted partner.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start lg:space-x-4 leading-6">
                    <img
                      src={y3}
                      alt="Aim Icon"
                      className="w-12 h-12 lg:flex hidden"
                    />
                    <div>
                      <h3 className="text-xl font-extrabold lg:text-black text-white">AIM</h3>
                      <p className="text-[#999] lg:w-[290px]">
                        We aim to contribute to the improvement of global healthcare standards by providing advanced diagnostic technologies accessible and affordable for all.
                      </p>
                    </div>
                  </div>
                </div>


                <div className="mt-8 flex container items-center">
                  <a href="#" className="relative ont-semibold lg:text-black text-white md:font-bold uppercase tracking-wider group flex items-center">
                    LEARN MORE
                    <span className="ml-2 inline-block h-0.5 w-5 md:w-10 lg:bg-black bg-white transition-all duration-300 ease-in-out md:group-hover:w-20 group-hover:w-10"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

