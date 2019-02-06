import * as React from "react";
import "../.././css/Additem.css"
export default (props: any) => {
  const { title, isbn } = props;
  return (
    <div>
      <h2 className="headingType"> Title: {title} </h2>
      <br />
      <h3 className="headingType">ISBN Number: {isbn} </h3>
       <div className='button-box'>
       <button className="button" id="button-3" onClick={props.deleEvent}>
        Remove
      </button>
      <button className="button" id="button-4" value={isbn} onClick={props.viewEvent}>
        View
      </button>
       </div>
    </div>
  );
};




