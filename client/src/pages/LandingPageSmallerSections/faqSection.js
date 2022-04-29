import React from 'react'

const FaqSection = () => {
    return (
        <>
            <div className="faq-container">
                <h1 className="faqs-header" style={{ color: "rgb(40, 102, 129)" }}>FAQs</h1>
                <div className="list-container">
                    <ul>
                        <li>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Asperiores, eius!
                            </p>

                            <button className="toggle-more-btn"></button>
                            <p className="faq-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                                sapiente ab nemo, eligendi dicta distinctio? Dolor, aut enim
                                autem, iste illum nam quibusdam mollitia illo quia quasi
                                voluptatem sit incidunt.
                            </p>
                        </li>
                        <li>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                                minus?
                            </p>
                            <button className="toggle-more-btn"></button>
                            <p className="faq-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                                sapiente ab nemo, eligendi dicta distinctio? Dolor, aut enim
                                autem, iste illum nam quibusdam mollitia illo quia quasi
                                voluptatem sit incidunt.
                            </p>
                        </li>
                        <li>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
                                doloremque?
                            </p>

                            <button className="toggle-more-btn"></button>
                            <p className="faq-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                                sapiente ab nemo, eligendi dicta distinctio? Dolor, aut enim
                                autem, iste illum nam quibusdam mollitia illo quia quasi
                                voluptatem sit incidunt.
                            </p>
                        </li>
                        <li>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
                                doloremque.
                            </p>

                            <button className="toggle-more-btn"></button>
                            <p className="faq-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                                sapiente ab nemo, eligendi dicta distinctio? Dolor, aut enim
                                autem, iste illum nam quibusdam mollitia illo quia quasi
                                voluptatem sit incidunt.
                            </p>
                        </li>
                    </ul>
                    {/* to add faq btn functionality */}
                    {/* <script src="./js-frontend/faq-button.js"></script> */}
                </div>
            </div>
        </>
    )
}

export default FaqSection