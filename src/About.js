import React from "react"

export default function About({ width }) {
  return (
    <div
      id="About"
      class={`vh-100 d-flex flex-column justify-content-center w-${
        width > 991 ? "50" : "100"
      } ml-lg-5 `}
    >
      <div class="d-flex flex-column justify-content-center mt-lg-0 mt-5">
        <h1 class="display-2">
          Pasionate{" "}
          <span class="text-warning font-weight-bold">Self-taught </span>
          <h1 />
          Full-Stack developer
        </h1>
        {/* <h1 class="display-2 p-0">Full-Stack developer</h1> */}

        <p class="mb-4 mb-lg-5">
          An ordinary man, who learned, he is capable of{" "}
          <span class="text-warning font-weight-bold">extraordinary</span>{" "}
          things
        </p>
        <div className="social-icons d-flex justify-content-center justify-content-lg-end mt-5">
          <a className="" href="https://github.com/kstulgys" target="_blank">
            <i className="fab fa-github" />
          </a>
          <a
            className="animated infinite bounce delay-1s"
            href="https://www.dropbox.com/s/cwhewbr9yd8f0if/Karolis_Stulgys_resume_and_brief_2019.pdf?dl=0"
            target="_blank"
          >
            <i className="fas fa-file-download" />
          </a>
          <a
            className=""
            href="https://linkedin.com/in/karolis-stulgys"
            target="_blank"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  )
}
