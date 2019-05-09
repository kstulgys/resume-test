import React from "react";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="Experience">
      <div class="mb-5">
        <h2>
          BIM MEP Application specialist<span className="text-warning">@</span>
          Central Innovation
        </h2>
        <h4 class="text-muted p-0 m-0">
          Mar 2016 - Present • Sydney, Australia
        </h4>
        <p class="mt-2">
          Provide engineering software demos, training, and technical support
          for AEC (Architecture, Engineering & Construction) industry experts
        </p>
      </div>
      <div class="mb-5">
        <h2>
          Mechanical engineer
          <span className="text-warning">@</span>MEPCO
        </h2>
        <h4 class="text-muted">Dec 2014 - Feb 2016 • Vilnius, Lithuania</h4>
        <p class="mt-2">
          Responsible for the heating and ventilation systems design for new and
          renovated buildings + provide engineering software training for team
          members
        </p>
      </div>
    </Section>
  );
}
