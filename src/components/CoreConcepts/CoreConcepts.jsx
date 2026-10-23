import "./CoreConcepts.css";

/*
// Arguments will be in the object 'props'
function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
*/

// Object Destructuring used here, to make code more easier and simple to read and manage
export default function CoreConcepts({ title, image, description }) {
  return (
    <li>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
