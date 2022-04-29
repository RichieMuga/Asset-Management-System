import React from 'react'
import consumer1 from '../../assets/images/etty-fidele-UBJsHb3HLv8-unsplash.jpg'
import consumer2 from '../../assets/images/etty-fidele-VNYCIbZju0o-unsplash.jpg'
import consumer3 from '../../assets/images/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
import consumer4 from '../../assets/images/leon-ell-f6HbVnGtNnY-unsplash.jpg'
import rating4 from '../../assets/images/4starRating.png'
import rating5 from '../../assets/images/5starRating.png'


const TestimonialsSection = () => {
    return (
        <>
            <div className="Testimonials">
                <section className="Testimonial-heading-container">
                    <h1>Testimonials</h1>
                </section>
                <div className="Testimonial-child-1">
                    <button className="arrow" id="arrow1"></button>
                    <span className="quote-1"> "</span>

                    <div className="grid-2">
                        <div className="slide-row" id="slides">
                            <div className="slide-column current-slide">
                                <div className="text">
                                    <h5 style={{ "word-break": "normal" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Magnam suscipit quod odio magni laudantium expedita?<br />
                                        <h3 className="text-name">~Lorem ipsum</h3>
                                    </h5>
                                </div>
                                <div className="images">
                                    <img className="images" src={consumer1} alt="satisfied user" />
                                </div>
                                <div className="rating-stars">
                                    <img src={rating5} alt="5 stars" />
                                </div>
                            </div>
                            <div className="slide-column">
                                <div className="text">
                                    <h5>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Pariatur neque esse perspiciatis possimus numquam mollitia ex,
                                        placeat magnam nulla eum dignissimos repellat nam quis culpa,
                                        assumenda quo fugiat autem itaque.<br />
                                        <h3 className="text-name">~Lorem ipsum</h3>
                                    </h5>
                                </div>
                                <div className="images">
                                    <img className="images" src={consumer2} alt="satisfied user" />
                                </div>
                                <div className="rating-stars">
                                    <img src={rating5} alt="5 stars" />
                                </div>
                            </div>
                            <div className="slide-column">
                                <div className="text">
                                    <h5>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Pariatur neque esse perspiciatis possimus numquam mollitia ex,
                                        placeat magnam nulla eum dignissimos repellat nam quis culpa,
                                        assumenda quo fugiat autem itaque.<br />
                                        <h3 className="text-name">~Lorem ipsum</h3>
                                    </h5>
                                </div>
                                <div className="images">
                                    <img className="images" src={consumer3} alt="satisfied user" />
                                </div>
                                <div className="rating-stars">
                                    <img src={rating4} alt="5 stars" />
                                </div>
                            </div>
                            <div className="slide-column">
                                <div className="text">
                                    <h5>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Pariatur neque esse perspiciatis possimus numquam mollitia ex,
                                        placeat magnam nulla eum dignissimos repellat nam quis culpa,
                                        assumenda quo fugiat autem itaque.<br />
                                        <h3 className="text-name">~Lorem ipsum</h3>
                                    </h5>
                                </div>
                                <div className="images">
                                    <img className="images" src={consumer4} alt="satisfied user" />
                                </div>
                                <div className="rating-stars">
                                    <img src={rating5} alt="5 stars" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="arrow" id="arrow2"></button>
                    <span className="quote-2"> "</span>
                </div>
                <div className="Testimonial-child-2"></div>
            </div>
            {/* {carousel function} */}
            {/* <script src="./js-frontend/carousel.js"></script> */}
        </>
    )
}

export default TestimonialsSection