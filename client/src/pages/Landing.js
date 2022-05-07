import IntroductionSection from "./LandingPageSmallerSections/introductionSection"
import ServicesPageSection from "./LandingPageSmallerSections/servicesPageSection"
import TestimonialsSection from "./LandingPageSmallerSections/testimonialsSection"
import Message from "./LandingPageSmallerSections/message"
import FaqSection from "./LandingPageSmallerSections/faqSection"
import Header from "./Header"
import Footer from "./Footer"
// import Wrapper from "../assets/css/Landing"
const Landing = () => {
    return (
        <>
            <IntroductionSection />
            <ServicesPageSection />
            {/* <TestimonialsSection /> */}
            <FaqSection />
            <Message />
            <Footer />
        </>
    )
}

export default Landing