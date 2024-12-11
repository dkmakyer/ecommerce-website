import React from 'react'
import "./About.css"
import shopping from "../../assets/about-us-shopping.jpg"
import Reassurance from "../../components/reassurance/Reassurance";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBuilding, faDollar, faFunnelDollar } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <>
      <div className="about-us-container">
        <div className="our-story">
          <div className="story">
            <h1>Our Story</h1>
            <p>
              At Agbogbloshie, we understand how stressful and time-consuming
              shopping for goods can be, especially in today’s fast-paced world.
              That’s why we created a platform that doesn’t just deliver
              products—it delivers an experience.
            </p>
            <p>
              We aim to make every customer feel like they shopped for their
              goods themselves. From handpicking quality items to ensuring
              smooth delivery, our process is tailored to your needs. Whether
              it’s everyday essentials or special purchases, we handle it all
              with care and precision, so you can focus on what truly matters.
            </p>
            <h4>
              Agbogbloshie: Bringing the market to your doorstep, just the way
              you would.
            </h4>
          </div>
          <div >
            <img className="story-image" src={shopping} alt="story image" />
          </div>
        </div>
        <div className="assurance-list">
          <ul>
            <li>
              <FontAwesomeIcon
                className="assurance-image"
                icon={faBuilding}
              />
              <h2>2k</h2>
              <p>Sellers active on our site</p>
            </li>
            <li>
              <FontAwesomeIcon className="assurance-image" icon={faDollar} />
              <h2>10k</h2>
              <p>Monthly production sale</p>
            </li>
            <li>
              <FontAwesomeIcon className="assurance-image" icon={faBagShopping} />
              <h2>15k</h2>
              <p>Customers active on our site</p>
            </li>
            <li>
              <FontAwesomeIcon className="assurance-image" icon={faFunnelDollar} />
              <h2>12k</h2>
              <p>Annual gross sale on our site</p>
            </li>
          </ul>
        </div>
        <Reassurance/>
      </div>
    </>
  )
}

export default About
