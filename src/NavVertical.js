import React, { useState, useEffect } from "react"
import me from "./images/me.jpg"

export default function NavVertical() {
  const [active, setActive] = useState("#About")

  // useEffect(() => {
  //   document.querySelector('[ href="#Projects"]').click()
  // }, [])

  function handleClick(e) {
    const { name } = e.target
    console.log(name)
    setActive(name)
  }

  return (
    <nav className="nav-vertical shadow-lg bg-dark d-flex justify-content-center align-items-center">
      <div class="d-flex flex-column align-items-center justify-content-around">
        <img
          src={me}
          className="rounded-circle mb-5 img-profile wow fadeIn"
          data-wow-duration="2s"
        />
        <h2 class="m-3 font-weight-bold">
          <a
            name="#About"
            href="#About"
            onClick={handleClick}
            class={active === "#About" ? "text-warning" : "text-secondary "}
          >
            About
          </a>
        </h2>
        {/* <h2 class="m-2 font-weight-bold">
          <a
            name="#Experience"
            href="#Experience"
            onClick={handleClick}
            class={active === "#Experience" ? "text-warning" : "text-secondary"}
          >
            Experience
          </a>
        </h2>
        <h2 class="m-2 font-weight-bold">
          <a
            name="#Education"
            href="#Education"
            onClick={handleClick}
            class={active === "#Education" ? "text-warning" : "text-secondary"}
          >
            Education
          </a>
        </h2> */}
        <h2 class="m-3 font-weight-bold">
          <a
            name="#Skills"
            href="#Skills"
            onClick={handleClick}
            class={active === "#Skills" ? "text-warning" : "text-secondary"}
          >
            Skills
          </a>
        </h2>
        <h2 class="m-3 font-weight-bold">
          <a
            name="#Projects"
            href="#Projects"
            onClick={handleClick}
            class={active === "#Projects" ? "text-warning" : "text-secondary"}
          >
            Projects
          </a>
        </h2>
        <h2 class="m-3 font-weight-bold">
          <a
            name="#Awards"
            href="#Awards"
            onClick={handleClick}
            class={active === "#Awards" ? "text-warning" : "text-secondary"}
          >
            Awards
          </a>
        </h2>
        {/* <h2 class="m-2 font-weight-bold">
          <a
            name="#Interests"
            href="#Interests"
            onClick={handleClick}
            class={active === "#Interests" ? "text-warning" : "text-secondary"}
          >
            Interests
          </a>
        </h2> */}
      </div>
    </nav>
  )
}
