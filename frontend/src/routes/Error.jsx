import React from 'react'
import { Link } from "react-router-dom";

export default function Error() {

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <Link to="/"><button>To home</button></Link>
      </p>
    </div>
  );
}
    