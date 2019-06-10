import React from "react"
import Section from "./Section"
import c1 from "./images/c1.png"

export default function Awards() {
  return (
    <Section id="Awards">
      <div className="">
        <div class="img-container">
          <img src={c1} alt="award" />
        </div>

        <h3 class="text-muted my-4">More coming soon</h3>
      </div>
    </Section>
  )
}
