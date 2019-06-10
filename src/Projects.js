import React from "react"
import Section from "./Section"
import fire from "./images/fire.png"
import hotel from "./images/hotel.png"
import cart from "./images/cart.png"

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
          <a class="m-2" href={live} target="_blank">
            <i class="fas fa-link fa-2x text-dark" />
          </a>
        </div>
      </div>
    </article>

    // <div class="col-12 col-lg-4">
    //   <div class="card">
    //     <img class="card-img" src={img} alt="Card cap" />
    //     <div class="card-body card-img-overlay">
    //       <h4 class="card-title">Sample Card Title</h4>
    //       <p class="card-text">
    //         He seems sinking under the evidence could not only grieve and a
    //         visit. The father is to bless and placed in his length hid...
    //       </p>
    //       <a href="#" class="btn btn-primary">
    //         Tell me more &rarr;
    //       </a>
    //     </div>
    //   </div>
    // </div>
  )
}

function items() {
  return [
    {
      itemNum: "item-1",
      img: hotel,
      title: "HTML & CSS",
      description: "Flexbox / grid",
      git: "https://github.com/kstulgys/booking-app-css",
      live: "https://hotel-booking-app-css.netlify.com"
    },
    {
      itemNum: "item-4",

      img: cart,
      title: "Vanilla js shopping app",
      description: "MVC architecture",
      git: "https://github.com/kstulgys/mvc-shopping-cart",
      live: "https://mvc-shopping-cart.netlify.com"
    },
    {
      itemNum: "item-8",

      img: fire,
      title: "ReactJs chat app",
      description: "Hooks / firebase",
      git: "https://github.com/kstulgys/react-on-fire",
      live: "https://react-on-fire.netlify.com"
    }
    // {
    //   itemNum: "item-2",
    //   img: "https://source.unsplash.com/random/1",
    //   title: "Next Project",
    //   description: "Awesome new app",
    //   git: null,
    //   live: null
    // },
    // {
    //   itemNum: "item-5",
    //   img: "https://source.unsplash.com/random/2",
    //   title: "Next Project",
    //   description: "Awesome new app",
    //   git: null,
    //   live: null
    // },
    // {
    //   itemNum: "item-6",
    //   img: "https://source.unsplash.com/random/3",
    //   title: "Next Project",
    //   description: "Awesome new app",
    //   git: null,
    //   live: null
    // },
    // {
    //   itemNum: "item-7",
    //   img: "https://source.unsplash.com/random/4",
    //   title: "Next Project",
    //   description: "Awesome new app",
    //   git: null,
    //   live: null
    // },
    // {
    //   itemNum: "item-3",
    //   img: "https://source.unsplash.com/random/5",
    //   title: "Next Project",
    //   description: "Awesome new app",
    //   git: null,
    //   live: null
    // }
  ]
}
