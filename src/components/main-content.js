import React from 'react';

const MainContent = () => {
    return (
        <div className="container">
            <div className="text-center mt-3">
                <h1>Our Services</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col mt-5">
                    <div className="card">
                        <img
                            src="https://images.unsplash.com/photo-1447279506476-3faec8071eee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80.jpg"
                            className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Our Products</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mt-5">
                    <div className="card">
                        <img
                            src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80.jpg"
                            className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Meet Our Staff</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mt-5">
                    <div className="card">
                        <img
                            src="https://images.unsplash.com/photo-1566512410727-347595faf5a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80.jpg"
                            className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Celebrate with us</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural
                                lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col mt-5 mb-5">
                    <div className="card">
                        <img
                            src="https://images.unsplash.com/photo-1577930740770-486fcbb36d69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80.jpg"
                            className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Special Drinks</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;