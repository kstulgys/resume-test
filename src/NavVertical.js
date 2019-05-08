import React, { useState } from "react"
import me from "./images/me.jpg"

export default function NavVertical() {
  const [active, setActive] = useState("#About")

  function handleClick(e) {
    const { name } = e.target
    console.log(name)
    setActive(name)
  }

  return (
    <div className="nav-vertical bg-dark d-flex justify-content-center align-items-center">
      <div class="d-flex flex-column align-items-center justify-content-around">
        <img src={me} className="rounded-circle mb-5 img-profile" />
        <h2 class="m-2">
          <a
            name="#About"
            href="#About"
            onClick={handleClick}
            class={
              active === "#About"
                ? "text-warning font-weight-bold"
                : "text-secondary "
            }
          >
            About
          </a>
        </h2>
        <h2 class="text-warning m-2">
          <a
            name="#Experience"
            href="#Experience"
            onClick={handleClick}
            class={
              active === "#Experience"
                ? "text-warning font-weight-bold"
                : "text-secondary"
            }
          >
            Experience
          </a>
        </h2>
        <h2 class="text-warning m-2">
          <a
            name="#Education"
            href="#Education"
            onClick={handleClick}
            class={
              active === "#Education"
                ? "text-warning font-weight-bold"
                : "text-secondary"
            }
          >
            Education
          </a>
        </h2>
        <h2 class="text-warning m-2">
          <a
            name="#Skills"
            href="#Skills"
            onClick={handleClick}
            class={
              active === "#Skills"
                ? "text-warning font-weight-bold"
                : "text-secondary"
            }
          >
            Skills
          </a>
        </h2>
        <h2 class="text-warning m-2">
          <a
            name="#Projects"
            href="#Projects"
            onClick={handleClick}
            class={
              active === "#Projects"
                ? "text-warning font-weight-bold"
                : "text-secondary"
            }
          >
            Projects
          </a>
        </h2>
        <h2 class="text-warning m-2">
          <a
            name="#Awards"
            href="#Awards"
            onClick={handleClick}
            class={
              active === "#Awards"
                ? "text-warning font-weight-bold"
                : "text-secondary"
            }
          >
            Awards
          </a>
        </h2>
      </div>
    </div>
  )
}
