import React from 'react';
import "./card.css"

const Card = (props) => {
    const { imageUrl, title, text, arrow, footer } = props;

    return (
        <>
            <div className={`card Card border-0 position-relative ${footer ? "col-auto cardShadowFooter" : "cardShadow"} `} style={{ width: `${footer ? "" : "315px"}`, minHeight: `${footer ? "" : "300px"}` }}>
                {imageUrl && <img src={imageUrl} className="card-img-top" alt="Card Image" style={{ height: "160px", objectFit: "cover" }} />}
                <div className="card-body">
                    {title && <h3 className="card-title title">{title}</h3>}
                    {text && <p className="card-text text">{text}</p>}
                    <div className='position-absolute arrowDiv'>
                        {arrow && (footer ? (<><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16Z" fill="#008080" />
                        </svg></>) : (<><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="20" fill="#E6F2F2" />
                            <path d="M20 28L18.575 26.6L24.175 21H12V19H24.175L18.575 13.4L20 12L28 20L20 28Z" fill="#008080" />
                        </svg></>))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
