import React, { useState } from 'react';
import shirt from '../images/shirt.jpg';
import tshirt from '../images/t-shirt.jpg';
import bottoms from '../images/bottoms.webp';
import jackets from '../images/jackets.webp';
import sweatshirt from '../images/sweatshirt.webp';


function Category() {
    const [state, setState] = useState(
        [
            {
                id: 1,
                image: shirt,
                title: "Shirts"
            },
            {
                id: 2,
                image: tshirt,
                title: "T-Shirts"
            },
            {
                id: 3,
                image: bottoms,
                title: "Bottoms"
            },
            {
                id: 4,
                image: jackets,
                title: "Jackets"

            },
            {
                id: 5,
                image: sweatshirt,
                title: "Sweatshirts"

            }
        ]
    )

    return (
        <div>
            <div className="container-fluid mt-5">
                <h3 className="mb-4 ">Categories</h3>
                <div className="row gap-5">
                    {state.map((item) => {
                        return (
                            <div className="col-md-2 mb-3">
                                <div className='card bg-black'>

                                    <div className="card">
                                        <img src={item.image} className="card-img-top" alt="..."
                                            style={{ height: '250px', objectFit: 'cover' }}

                                        />
                                        <div className="text-center mt-2">
                                            <h6>{item.title}</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>

    )
}

export default Category
