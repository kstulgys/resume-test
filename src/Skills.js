import React from "react"
import Section from "./Section"

export default function Skills() {
  return (
    <Section id="Skills">
      <div class="item mb-5">
        <h2>Frontend</h2>
        <h4 class="text-muted">Proficient with:</h4>
        <ul class="ml-4 mt-2">
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>Reactjs</li>
          <li>Apollo Client</li>
        </ul>
      </div>
      <div class="item mb-5">
        <h2>Backend</h2>
        <h4 class="text-muted">Familiar with:</h4>
        <ul class="ml-4 mt-2">
          <li>REST</li>
          <li>Node</li>
          <li>Apollo Server</li>
          <li>Graphql</li>
          <li>MongoDB</li>
          <li>Prisma</li>
        </ul>
      </div>

      <div class="item mb-5">
        <h2>Other</h2>
        <ul class="ml-4 mt-2">
          <li>Jest</li>
          <li>react-testing-library</li>
        </ul>
      </div>
    </Section>
  )
}
