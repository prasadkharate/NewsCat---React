import React from 'react'


const Newitems = (props)=> {


        let { title,
            description,
            imageUrl,
            url,
            author,
            date,
            source
        } = props;
        return (
            <div className='my-3'>
                <div className="card">
                 
                    <img src={
                            !imageUrl ? "https://www.livemint.com/lm-img/img/2023/07/14/600x338/Bastille_Day_2023_1689297761331_1689297767499.jpg" : imageUrl
                        }
                        className="card-img-top"
                        alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}</h5>
                        <p className="card-text">
                            {description}</p>
                        <p className="card-text">
                            <small className="text-muted">By {
                                author ? author : "Unknown"
                            }
                                on {
                                new Date(date).toGMTString()
                            }</small>
                        </p>

                        <a href={url}
                            target='_blank'
                            rel='noreferrer'
                            className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }


export default Newitems
