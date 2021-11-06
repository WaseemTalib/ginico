import React from "react";

function Tab11() {
  return (
    <>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">How many brothers do you have living?</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">What is your oldest brother’s first name?</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">How many sisters do you have living?</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">What is your youngest sister’s last name?</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">
            What is your place of birth <small>city/state/country</small>
          </label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">What is the name of the hospital that you were born?</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">If no hospital, what is the name of the mid-wife?</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">First name of mid-wife</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">Last name of mid-wife</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">
            If no mid-wife where was the exact location of the first responder for your birth? <br />
            <small> ex: highway 10 and route 19</small>
          </label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">
            <small> Street, highway, bridge, tunnel, or please describe in detail.</small>
            <br />
            If Not a Hospital, then what was the address of your birth?
          </label>
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
          <label className="control-label">If no address, then please describe the location in detail.</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">What is your age today</label>
          <input type="date" className="form-control" name="zip" defaultValue required autoFocus />
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

export default Tab11;
