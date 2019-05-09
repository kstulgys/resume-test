import React from "react";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="Skills">
      <div class="item mb-5">
        <h2>Frontend</h2>
        <h4 class="text-muted">Proficient with:</h4>
        <ul class="mt-2">
          <li>
            <i class="fas fa-check mr-2 text-warning" />
            HTML & CSS
          </li>
          <li>
            <i class="fas fa-check mr-2 text-warning" />
            JavaScript
          </li>
          <li>
            <i class="fas fa-check mr-2 text-warning" />
            Reactjs
          </li>
          <li>
            <i class="fas fa-check mr-2 text-warning" />
            Apollo Client
          </li>
        </ul>
      </div>
      <div class="item mb-5">
        <h2>Backend</h2>
        <h4 class="text-muted">Familiar with:</h4>
        <ul class="mt-2">
          <li>
            <i class="fas fa-check mr-2 text-warning" />
            REST
          </li>
          <li>
            <i class="fas fa-check mr-2 text-warning" />
            Node
          </li>
          <li>
            <i class="fas fa-check mr-2 text-warning" />
            Apollo Server
          </li>
          <li>
            <i class="fas fa-check mr-2 text-warning" />
            Graphql
          </li>
          <li>
            <i class="fas fa-check mr-2 text-warning" />
            MongoDB
          </li>
          <li>
            <i class="fas fa-check mr-2 text-warning" />
            Prisma
          </li>
        </ul>
      </div>

      <div class="item mb-5">
        <h2>Testing</h2>
        <ul class="mt-2">
          <li>
            <i class="fas fa-check mr-2 text-warning" />
            Jest
          </li>
          <li>
            <i class="fas fa-check mr-2 text-warning" />
            react-testing-library
          </li>
        </ul>
      </div>
    </Section>
  );
}
