import React from 'react'
import { Carousel } from 'react-bootstrap'
import './banner.css';
import img1 from '../../assets/images/hills.jpg';
import img2 from '../../assets/images/02.jpg';

export const Banner = () => {
  return (
 <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={img1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  Adventure Awaits <span>in the Wild</span>
                </h5>
                <p className="sub_text">
                  Explore forests , sleep in tents ,and live the adventurous camp life you’ve always dreamed of.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={img2} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  Classic & Inviting<span>Reconnect with Nature</span>
                </h5>
                <p className="sub_text">
                  Escape the noise — camp under the stars, hike wild trails, and rediscover peace.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  )
}
