import React from 'react'
import services from '../../assets/images/ShowService.png'
const ServicesPageSection = () => {
  return (
    <>
      <div className="service-head">
        <h1 className="head-service">Services</h1>
      </div>
      <div className="services-page">
        <div className="services-page-child-1"></div>
        <div className="services-page-child-2">
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
            <li>
              <p>
                voluptatibus exercitationem, veniam fuga dolores eos nemo corrupti
                recusandae nostrum aliquam!
              </p>
            </li>
          </ul>
        </div>
        <div className="services-page-child-3">
          <img src={services} alt="services" />
        </div>
      </div>
    </>
  )
}

export default ServicesPageSection