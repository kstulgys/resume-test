import React from "react"
import Section from "./Section"
import fire from "./images/fire.png"
import hotel from "./images/hotel.png"
import cart from "./images/cart.png"
import twitter from "./images/twitter-task.png"
import nextLogin from "./images/next-login.png"
import reactflix from "./images/reactflix.png"
import expenses from "./images/expenses.png"

export default function Portfolio() {
  return (
    <Section id="Projects">
      <div className="row">
        {items().map((item, i) => {
          return <IMGContainer key={i} {...item} />
        })}
      </div>
    </Section>
  )
}

function IMGContainer({ itemNum, img, title, description, git, live }) {
  return (
    <article
      class={`img-container ${itemNum} p-0 my-3 col-12 col-lg-4 p-md-0 m-md-3 shadow`}
    >
      <img src={img} alt="project" className="" />
      <div class="d-flex flex-column align-items-center justify-content-around img-description h-100 w-100">
        <div class="img-text">
          <h3 class="font-weight-bold text-dark mb-2">{title}</h3>
          <p>{description}</p>
        </div>
        <div class="img-icons">
          <a class="m-2" href={git} target="_blank">
            <i class="fab fa-github fa-2x text-dark" />
          </a>
          {live && (
            <a class="m-2" href={live} target="_blank">
              <i class="fas fa-link fa-2x text-dark" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function items() {
  return [
    {
      img: expenses,
      itemNum: "item-5",
      title: "Expensify",
      description: "reactjs / hooks / tailwindCSS",
      git: "https://github.com/kstulgys/expensify",
      live: "https://uhofg.codesandbox.io/"
    },
    {
      itemNum: "item-1",
      img: hotel,
      title: "Hotel booking",
      description: "HTML & CSS, Flexbox / Grid",
      git: "https://github.com/kstulgys/booking-app-css",
      live: "https://hotel-booking-app-css.netlify.com"
    },
    {
      itemNum: "item-4",

      img: cart,
      title: "Shopping cart",
      description: "Vanilla js / MVC architecture",
      git: "https://github.com/kstulgys/mvc-shopping-cart",
      live: "https://mvc-shopping-cart.netlify.com"
    },
    {
      itemNum: "item-8",

      img: fire,
      title: "Chat",
      description: "Reactjs / Hooks / Firebase",
      git: "https://github.com/kstulgys/react-on-fire",
      live: "https://react-on-fire.netlify.com"
    },
    {
      img: twitter,
      itemNum: "item-2",
      title: "Twitter-test-task",
      description: "Twitter API / Client / Server",
      git: "https://github.com/kstulgys/twitter-frontend"
    },
    {
      img: nextLogin,
      itemNum: "item-5",
      title: "Next-login",
      description: "Nextjs / Reactjs / Nodejs",
      git: "https://github.com/kstulgys/next-react-signin",
      live: "https://codesandbox.io/s/github/kstulgys/next-react-signin"
    },
    {
      img: reactflix,
      itemNum: "item-5",
      title: "Reactflix",
      description: "Reactjs / tmdbAPI",
      git: "https://github.com/kstulgys/react-flix",
      live: "https://codesandbox.io/s/react-flix-jgcrc"
    }
  ]
}
