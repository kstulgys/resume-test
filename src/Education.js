import React from "react";

export default function Education() {
  return (
    <div id="Education" class="h-100 d-flex flex-column pt-5">
      <h1 className="mt-5">Education</h1>
      <div className="d-flex flex-fill flex-column justify-content-center">
        <div class="mb-5">
          <h5>VG Technical University</h5>
          <h6 class="text-muted">2013 - 2015 • Vilnius, Lithuania</h6>
          <p>MSc in Thermal Engineering</p>
        </div>
        <div class="item">
          <h5>Lund University</h5>
          <h6 class="text-muted">2013 - 2015 • Lund, Sweden</h6>
          <p>MSc in Energy-efficient and Environmental Building Design</p>
        </div>
      </div>
    </div>
  );
}
