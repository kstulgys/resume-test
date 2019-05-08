import React from "react";

export default function Skills() {
  return (
    <div id="Skills" class="h-100 d-flex flex-column pt-5">
      <h1 className="mt-5">Skills</h1>
      <div className="d-flex flex-fill flex-column justify-content-center">
        <div class="mb-5">
          <h5>Frontend</h5>
          <h6 class="text-muted">Mar 2016 - Present • Sydney, Australia</h6>
          <p>
            Provide engineering software demos, training, and technical support
            for AEC (Architecture, Engineering & Construction) industry experts
          </p>
        </div>
        <div class="item">
          <h5>Backend</h5>
          <h6 class="text-muted">Dec 2014 - Feb 2016 • Vilnius, Lithuania</h6>
          <p>
            Responsible for the heating and ventilation systems design for new
            and renovated buildings + provide engineering software training for
            team members
          </p>
        </div>
      </div>
    </div>
  );
}
