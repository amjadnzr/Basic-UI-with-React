import * as React from "react";
import "../.././css/Additem.css"

export default (props: any) => {
  const { rid, fname } = props;
  return (
    <div>
      <h2 className="headingType"> Reader Id: {rid} </h2>
      <br />
      <h3 className="headingType">First Name: {fname} </h3>
       <div className='button-box'>
       <button className="button" id="button-3" onClick={props.deleEvent}>
        Remove
      </button>
      <button className="button" id="button-4" value={rid} onClick={props.viewEvent}>
        View
      </button>
       </div>
    </div>
  );
};




