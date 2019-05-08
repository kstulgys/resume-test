import React from "react";

export default function About() {
  return (
    <div
      id="About"
      class="vh-100 d-flex flex-column justify-content-center pt-5"
    >
      <div class="d-flex flex-column justify-content-center mt-5">
        <h1 class="display-4">
          Pasionate <span class="text-warning">Self-taught</span> Frontend
          engineer
        </h1>
        <p>
          An ordinary man, who learned, he is capable of extraordinary things
        </p>
      </div>
      <div className="social-icons d-flex justify-content-center mt-5">
        <a class="" href="#">
          <i class="fab fa-github" />
        </a>
        <a class="" href="#">
          <i class="fab fa-linkedin" />
        </a>
      </div>
    </div>
  );
}
