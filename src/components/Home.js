import React from 'react';
import cover from '../images/cover.jpg';

function Home() {
    return (
        <div>
            <div className="card border-0">
                <img
                    src={cover}
                    className="card-img-top img-fluid"
                    alt="Shirt"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
        </div>
    )
}

export default Home
