import React from "react";

function Tab1() {
  return (
    <>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">What is Your First Name ?</label>
          <input type="text" className="form-control" name="bussiness_name" required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">What is your Middle Initial?</label>
          <input type="text" className="form-control" name="business_dba" required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">What is your Last Name?</label>
          <input type="text" className="form-control" name="business_address" required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">Who is the Primary contact ?</label>
          <select className="form-control" name="password" required autofocus>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Jr.</option>
            <option>Sr.</option>
            <option>2nd</option>
            <option>3rd</option>
            <option>4th</option>
            <option>5th</option>
            <option>6th</option>
            <option>7th</option>
            <option>8th</option>
            <option>9th</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">What is your My Nickname?</label>
          <input type="text" className="form-control" name="city" required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">What is your Date of Birth?</label>
          <input type="date" className="form-control" name="state" required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">What is your Social Security Number?</label>
          <input type="text" className="form-control" name="zip" required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">Verify Social Security Number?</label>
          <input type="text" className="form-control" name="business_physical" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">Do you use a Credit Privacy Number or Credit Protection Number or Credit Profile Number?</label>
          <div className="row">
            <div className="col-md-6">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" />
                <label className="form-check-label">Yes</label>
              </div>
            </div>
            <div className="col-md-6" />
            <div className="form-check-no">
              <input className="form-check-input" type="radio" name="flexRadioDefault" defaultChecked />
              <label className="form-check-label">No</label>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">What is your Credit Privacy Number?</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">Are you a U.S. Veteran?</label>
          <div className="row">
            <div className="col-md-6">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" />
                <label className="form-check-label">Yes</label>
              </div>
            </div>
            <div className="col-md-6" />
            <div className="form-check-no">
              <input className="form-check-input" type="radio" name="flexRadioDefault" defaultChecked />
              <label className="form-check-label">No</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab1;
