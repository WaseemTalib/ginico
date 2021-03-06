import React from "react";

function Tab8() {
  return (
    <>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label"> What is your natural hair color ? </label>
          <select className="form-control" name="password" required autofocus>
            <option>Black,</option>
            <option>blonde,</option>
            <option>brown,</option>
            <option>brunette,</option>
            <option>carrot top red,</option>
            <option>dark-brown,</option>
            <option>fiery red,</option>
            <option>gray,</option>
            <option>honey,</option>
            <option>light-brown,</option>
            <option>platinum blonde,</option>
            <option>sandy,</option>
            <option>silver,</option>
            <option>strawberry red,</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-danger form-button" name="form-button" style={{ float: "left" }}>
          Save and Return Later
        </button>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success form-button" name="form-button" id="suc">
          Save and Continue
        </button>
      </div>
    </>
  );
}

export default Tab8;
