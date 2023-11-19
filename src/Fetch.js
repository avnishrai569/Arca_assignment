import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const Fetch = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const getUsers = async () => {
        const response = await fetch("https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d");
        const finalData = await response.json();
        setUsers(finalData);
    };

    const handleData = (curElem) => {
        const newData = JSON.stringify(curElem);
        localStorage.setItem("value", newData);
        navigate("/home", { state: { newData } });
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div   >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', maxWidth: '50%' }} >
            {users.map((curElem) => (
                <div key={curElem.id} className="card text-white mb-3"  onClick={() => handleData(curElem)} style={{ backgroundColor: curElem.backgroundColor, cursor: 'pointer' }}>
                    <div className="card-header">{curElem.id}</div>
                    <div className="card-body">
                        <h5 className="card-title">{curElem.name}</h5>
                        <p className="card-text">{curElem.email}, {curElem.address}</p>
                        <p>Contact No: {curElem.phone}</p>
                        {curElem.parentId && <p>Parent: {users[curElem.parentId - 1].name}</p>}
                        {curElem.parentId && (
                            <div>
                                {users.map((ele) => (
                                    ele.parentId === curElem.parentId && <p key={ele.id}>Subordinate: {ele.name}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Fetch;