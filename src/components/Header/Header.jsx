import React from 'react';


const Header = () => {
    return (
        <div>
            <nav className="d-flex justify-content-between align-items-center mx-md-5 px-md-5 mt-3">
                <a className="navbar-brand fs-3 fw-semibold" href="#">
                    Knowledge Cafe
                </a>
                <img className='round' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" width="45px" height="45px" alt="" />
            </nav>
            <hr className='mt-4 container text-center ' />
        </div>
    );
};

export default Header;