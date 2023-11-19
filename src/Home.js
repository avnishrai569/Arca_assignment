import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    const newDataString = location.state?.newData || '';
    const newData = JSON.parse(newDataString);

    return (
        <div>
            <h1 style={{ color: 'red' }}>Welcome to the Employee Description Page</h1>
            {newData && (
                <div>
                    <h2>Employee Details</h2>
                    <div class="card text-white bg-dark mb-3" style={{maxWidth: '100rem'}}>
                        <div class="card-header">{newData.name}</div>
                        <div class="card-body">
                            <h5 class="card-title">{newData.email} ,{newData.address} </h5>
                            <p class="card-text">Contact No : {newData.phone}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;

