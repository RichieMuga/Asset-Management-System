import React from 'react'
import testimonials from '../../utils/testimonials'
import Wrapper from '../../assets/css/LandingPageSmallerSectionCss/testimonialscss'


const TestimonialsSection = () => {
  return (
    <Wrapper>
      <h2 className="pageHeading">Testimonials</h2>
      <div className="testimonial-1 py-4 md:py-12">
        <div className="container mx-auto px-4">
          <div className="md:flex md:flex-wrap md:-mx-4 mb-4">
            {testimonials.map((testimony) => {
              const { id, name, quote, img, company } = testimony
              return (
                <div className="md:w-1/2 md:px-4 mt-6 md:mt-0" key={id}>
                  <div className="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300 bg-white">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                      <img src={img} alt={name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-gray-600">"{quote}"</p>
                      <div className="text-gray-900 font-bold uppercase mt-6">- {name}</div>
                      <div className="text-gray-600">{company}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default TestimonialsSection