import React from "react";
// Bootstrap
import { Spinner } from "react-bootstrap";


function Loading () {
  return (
    <Spinner animation="border" role="status" style={{color: 'black', flex: 1, marginTop:'50%', marginLeft:'50%', justifyContent: 'center', alignItems:'center'}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default Loading;