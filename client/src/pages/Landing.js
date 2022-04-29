import IntroductionSection from "./LandingPageSmallerSections/introductionSection"
import ServicesPageSection from "./LandingPageSmallerSections/servicesPageSection"
import TestimonialsSection from "./LandingPageSmallerSections/testimonialsSection"
import Message from "./LandingPageSmallerSections/message"
import FaqSection from "./LandingPageSmallerSections/faqSection"
import Wrapper from "../assets/css/Landing"
const Landing = () => {
    return (
        <>
            <IntroductionSection />
            <ServicesPageSection />
            {/* <TestimonialsSection /> */}
            <FaqSection />
            <Message />
        </>
    )
}

export default Landing