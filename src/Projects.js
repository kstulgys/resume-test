import React from "react"
import Section from "./Section"
import fire from "./images/fire.png"
import hotel from "./images/hotel.png"
import cart from "./images/cart.png"

export default function Portfolio() {
  return (
    <Section id="Projects">
      <div className="grid">
        <div class="img-container">
          <img src={hotel} />
          <div class="d-flex flex-column align-items-center justify-content-around img-description h-100 w-100">
            <div class="img-text">
              <h3 class="font-weight-bold text-dark mb-2">HTML & CSS</h3>
              <p>Flexbox / grid</p>
            </div>
            <div class="img-icons">
              <a
                class="m-2"
                href="https://github.com/kstulgys/booking-app-css"
                target="_blank"
              >
                <i class="fab fa-github fa-2x text-dark" />
              </a>
              <a
                class="m-2"
                href="https://hotel-booking-app-css.netlify.com"
                target="_blank"
              >
                <i class="fas fa-link fa-2x text-dark" />
              </a>
            </div>
          </div>
        </div>
        <div class="img-container">
          <img src={cart} />
          <div class="d-flex flex-column align-items-center justify-content-around img-description h-100 w-100">
            <div class="img-text">
              <h3 class="font-weight-bold text-dark mb-2">
                Vanilla js shopping app
              </h3>
              <p>MVC architecture</p>
            </div>
            <div class="img-icons">
              <a
                class="m-2"
                href="https://github.com/kstulgys/mvc-shopping-cart "
                target="_blank"
              >
                <i class="fab fa-github fa-2x text-dark" />
              </a>
              <a
                class="m-2"
                href="https://mvc-shopping-cart.netlify.com"
                target="_blank"
              >
                <i class="fas fa-link fa-2x text-dark" />
              </a>
            </div>
          </div>
        </div>
        <div class="img-container">
          <img src={fire} />
          <div class="d-flex flex-column align-items-center justify-content-around img-description h-100 w-100">
            <div class="img-text">
              <h3 class="font-weight-bold text-dark mb-2">ReactJs chat app</h3>
              <p>Hooks / firebase</p>
            </div>
            <div class="img-icons">
              <a
                class="m-2"
                href="https://github.com/kstulgys/react-on-fire"
                target="_blank"
              >
                <i class="fab fa-github fa-2x text-dark" />
              </a>
              <a
                class="m-2"
                href="https://react-on-fire.netlify.com"
                target="_blank"
              >
                <i class="fas fa-link fa-2x text-dark" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
