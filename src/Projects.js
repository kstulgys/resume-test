import React from "react";
import Section from "./Section";
import fire from "./images/fire.png";
import hotel from "./images/hotel.png";
import cart from "./images/cart.png";

export default function Portfolio() {
  return (
    <Section id="Projects">
      <div className="grid">
        {items().map((item, i) => {
          return <IMGContainer key={i} {...item} />;
        })}
      </div>
    </Section>
  );
}

function IMGContainer({ itemNum, img, title, description, git, live }) {
  return (
    <article class={`img-container ${itemNum}`}>
      <img src={img} />
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
  );
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
      itemNum: "item-2",

      img: cart,
      title: "Vanilla js shopping app",
      description: "MVC architecture",
      git: "https://github.com/kstulgys/mvc-shopping-cart",
      live: "https://mvc-shopping-cart.netlify.com"
    },
    {
      itemNum: "item-3",

      img: fire,
      title: "ReactJs chat app",
      description: "Hooks / firebase",
      git: "https://github.com/kstulgys/react-on-fire",
      live: "https://react-on-fire.netlify.com"
    },
    {
      itemNum: "item-4",
      img: "https://source.unsplash.com/random/1",
      title: "Next Project",
      description: "Awesome new app",
      git: null,
      live: null
    },
    {
      itemNum: "item-5",
      img: "https://source.unsplash.com/random/2",
      title: "Next Project",
      description: "Awesome new app",
      git: null,
      live: null
    },
    {
      itemNum: "item-6",
      img: "https://source.unsplash.com/random/3",
      title: "Next Project",
      description: "Awesome new app",
      git: null,
      live: null
    },
    {
      itemNum: "item-7",
      img: "https://source.unsplash.com/random/4",
      title: "Next Project",
      description: "Awesome new app",
      git: null,
      live: null
    },
    {
      itemNum: "item-8",
      img: "https://source.unsplash.com/random/5",
      title: "Next Project",
      description: "Awesome new app",
      git: null,
      live: null
    }
  ];
}
