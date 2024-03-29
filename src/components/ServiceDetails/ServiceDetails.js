import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const { serviceId } = useParams();

    const [service, setService] = useState([]);

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('../services.JSON');
                results = await results.json();
                results = await results.find(service => service.id === serviceId);
                setService(results);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [])

    console.log('service', service);

    const { id, name, serviceDetail, description, image } = service;


    return (
        <div className="container-fluid p-0">

            <div className="d-flex flex-column page-title-container justify-content-center align-items-center" >
                <div className="text-center" data-aos="fade-down">
                    <h2 className="fw-bold page-title fs-1">{name}</h2>
                    <p>“Counseling For Everyone’’</p>

                </div>
            </div>

            <div className="container py-5 text-secondary">
                
                <div className="mb-3">
                    <img className="img-fluid" src={image} alt="" style={{ height: 350 }} />
                </div>
                <div>
                    
                    <p>
                        {serviceDetail}
                    </p>
                </div>
                {/* <h4 className="lh-lg fw-bold">{name}</h4> */}
                <p className="lh-base">{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;