import React, { useEffect, useState } from 'react';
import './AllServices.css';
import Loading from '../../Loading/Loading';
import SingleService from '../../SingleService/SingleService';


const AllServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        async function callApi() {
            let response = await fetch('./services.JSON')
            response = await response.json()
            setServices(response)

        }
        callApi();
    }, [])

    return (
        <section id="section-sm lg:section-lg">
            <div className='container mx-auto'>

            <div className='text-center mb-16 lg:mb-32'>
          <h2
            className='h2 mb-3 lg:mb-[18px]'
            data-aos='fade-down'
            data-aos-delay='200'
          >
            Popular Courses
          </h2>
          <p
            className='max-w-[480px] mx-auto'
            data-aos='fade-down'
            data-aos-delay='300'
          >
            Practice anywhere, anytime. Explore a new way to exercise and learn
            more about yourself. We are providing the best.
          </p>
        </div>

            <div className="flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14container" >
                {
                    services.length === 0 ?
                        <Loading></Loading>
                        :
                        <div className="row row-cols-1 row-cols-md-3 g-4 pb-5 our-services">
                            {
                                services.map(service => <SingleService service={service} key={service.id}></SingleService>)
                            }
                        </div>
                }
            </div>
            </div>
            

            {/* <div className="text-center text-secondary" data-aos="fade-up">
                
                
                <p >
                    
                </p>
            </div> */}

        </section>
    );
};

export default AllServices;