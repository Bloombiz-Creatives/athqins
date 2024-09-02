import { useState } from 'react';
import why from '../../assets/why.jpg';
import y1 from '../../assets/y1.png';
import y2 from '../../assets/y2.png';
import y3 from '../../assets/y3.png';

const WhyChooseUs = () => {

  const [isHovered, setIsHovered] = useState(false);


  return (
    <section className="">
      <div style={{
        background: 'linear-gradient(90deg, #000 50%, #F7F7F7 50%)'
      }}>
        <div className='container mx-auto py-16 px-16'>
          <h2 className='font-extrabold text-white text-[32px] py-100 box-border mb-2 leading-tight '>Why Choose Us </h2>
          <p className='text-[#fff] opacity-70'>We offer perfect real estate services</p>
          <div className='flex  gap-10 mt-14'>
            <div>
              <img src={why} alt="" className='h-[540px]' />
            </div>
            <div>
              <div className="max-w-xl mx-auto p-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 leading-6">
                    <img
                      src={y1}
                      alt="Mission Icon"
                      className="w-12 h-12"
                    />
                    <div>
                      <h3 className="text-xl font-extrabold">Mission</h3>
                      <p className="text-[#999] w-[290px]">
                        To provide cutting-edge equipment and solutions that empower healthcare professionals to deliver precise and life-saving diagnoses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 leading-6">
                    <img
                      src={y2}
                      alt="Vision Icon"
                      className="w-12 h-12"
                    />
                    <div>
                      <h3 className="text-xl font-extrabold">Vision</h3>
                      <p className="text-[#999] w-[290px]">
                        To be a global leader in medical equipment driving advancement in healthcare technology and improving patient outcomes worldwide.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 leading-6">
                    <img
                      src={y3}
                      alt="Aim Icon"
                      className="w-12 h-12"
                    />
                    <div>
                      <h3 className="text-xl font-extrabold">AIM</h3>
                      <p className="text-[#999] w-[290px]">
                        We aim to contribute to the improvement of global healthcare standards by providing advanced diagnostic technologies accessible and affordable for all.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-8 flex items-center container">
                  <a href="#learn-more" className="text-lg font-semibold text-black">
                    LEARN MORE
                  </a>
                  <div className="relative flex-1 ml-4 border-b border-black border-expand transition-all duration-300"></div>
                </div> */}

                <div className="mt-8 flex container items-center">
                  <a href="#" className="relative ont-semibold text-black md:font-bold uppercase tracking-wider group flex items-center">
                  LEARN MORE
                    <span className="ml-2 inline-block h-0.5 w-5 md:w-10 bg-black transition-all duration-300 ease-in-out md:group-hover:w-20 group-hover:w-10"></span>
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

