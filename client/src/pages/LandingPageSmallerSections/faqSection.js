import React from 'react'
import Wrapper from '../../assets/css/LandingPageSmallerSectionCss/faqSectioncss'
// import FaqComponent from '../../components/faqComponent'
import { useState } from 'react'
import faqList from '../../utils/faqs'



const FaqSection = () => {

    // const ref = React.createRef();
    const [faqs, setFaqs] = useState([...faqList]);

    const toggleHandler = (e) => {
        e.preventDefault()
        // console.log("e? ", e.target.id);
        const temp = [...faqList];
        temp[e.target.id].chosen = !temp[e.target.id].chosen;
        setFaqs([...temp]);
    }
    return (
        <Wrapper>
            <div className="faq-container">
                <h1 className="faqs-header" style={{ color: "rgb(40, 102, 129)" }}>FAQs</h1>
                <div className="list-container">
                    <ul>
                        {faqs.map((faq) => {
                            const { id, question, answer, chosen } = faq
                            return (
                                <li key={id}>
                                    <p>{question}</p>
                                    {/* <button className="toggle-more-btn" onClick={toggleHandler}></button> */}
                                    <button className={`toggle-more-btn${chosen ? " rotate-btn" : ""}`} id={id} onClick={toggleHandler}></button>
                                    <p className={`faq-text${chosen ? " show-more" : ""}`}>{answer}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Wrapper>
    )
}

export default FaqSection