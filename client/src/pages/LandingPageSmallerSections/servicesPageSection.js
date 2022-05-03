import React from 'react'
import services from '../../assets/images/ShowService.png'
import Wrapper from '../../assets/css/LandingPageSmallerSectionCss/serviceSectioncss'
const ServicesPageSection = () => {
  return (
    <Wrapper>
      <div className="service-head">
        <h1 className="head-service">Services</h1>
      </div>
      <div className="services-page">
        <div className="services-page-child-1">
          <ul>
            <li>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
                sapiente accusantium eligendi ab maiores maxime voluptatem harum
                quos tempora fuga!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                sunt delectus sequi et aliquam, ipsam sed quam corrupti officiis
                dolor!
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
                doloremque quis aperiam in dolorem consequuntur sit adipisci eius
                officiis itaque.
              </p>
            </li>
          </ul>
        </div>
        <div className="services-page-child-2">
          <img src={services} alt="services" />
        </div>
      </div>
    </Wrapper>
  )
}

export default ServicesPageSection