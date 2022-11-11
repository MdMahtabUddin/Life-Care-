import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const SingleService = (props) => {
    const { id, name, description, image } = props.service;

    const url = `/serviceDetails/${id}`;

    return (
        <div className="w-full max-w-[368px] px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] bg-white hover:shadow-primary flex flex-col rounded-[14px] mx-auto transition" data-aos="fade-up">

            <div className="card h-100 ">
                <Link to={url} className="card-link">
                    <img src={image} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">{name}</h4>
                    <p className="card-text text-secondary">
                        {description.slice(0, 100)}...
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link to={url} className="card-link">
                        <button className="btn btn-sm btn-orange"data-aos='fade-up'
            data-aos-delay='600'>
                            Learn More <FontAwesomeIcon icon={faAngleDoubleRight} />
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default SingleService;