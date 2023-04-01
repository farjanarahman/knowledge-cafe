import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Card = ({ card, addReadingTime, addBookMark }) => {

    const { blog_img, auth_img, blog_title, read_time, publish_date, auth_name } = card;

    const [bookmarked, setBookmarked] = useState(false);

    const toggleBookmark = () => {
        setBookmarked(!bookmarked);
        addBookMark(blog_title);
    }

    return (
        <div className='mb-3'>
            <div className="card">
                <img src={blog_img} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-1">
                            <div className="">
                                <img src={auth_img} width="70px" height="70px" className="rounded-circle" alt="" />
                            </div>
                            <div>
                                <p className="mb-0 fw-bold fs-5">{auth_name}</p>
                                <p>{publish_date}</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start">
                            <p>{read_time} min read</p>
                            <button onClick={toggleBookmark} className="border-0 bg-body">
                                <FontAwesomeIcon icon={faBookmark} color={bookmarked ? 'red' : 'black'} />
                            </button>
                        </div>
                    </div>
                    <h5 className="card-title fs-2 my-2">{blog_title}</h5>
                    <p className="card-text text-secondary">
                        #beginners  #programming
                    </p>
                    <a href="#" onClick={() => addReadingTime(read_time)}  >
                        Mark as read
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
