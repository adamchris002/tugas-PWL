//children component
import React from "react";
import { Container } from "react-bootstrap";
import Collection from "./collection.album";

const Albums = (props) => {
  //metode 1
  const { title, description } = props;
  return (
    <React.Fragment>
      <Container className="mt-2">
        <h1>{title}</h1>
        <p>{description}</p>
        <Collection />
      </Container>
    </React.Fragment>
  );
};

//metode 2
// const Testing = ({title, description}) => {
//     return (
//         <React.Fragment>
//             <h1>{title}</h1>
//             <p>{description}</p>
//         </React.Fragment>
//     )
// }

export default Albums;
