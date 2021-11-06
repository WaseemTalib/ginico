import React from "react";

function Tab10() {
  return (
    <>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">Emergency contact in case of sickness or death</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">Office or House number</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">Street</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">City</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">Country</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">State</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">Zip + four</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">Ginicoe ID#</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
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

export default Tab10;
