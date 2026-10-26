import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept/CoreConcept.jsx";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* First approach to pass props */}
        {/* <CoreConcepts
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
        /> */}

        {/* More readable and neat way to pass props */}
        {/* <CoreConcepts {...CORE_CONCEPTS[1]} /> */}

        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}
