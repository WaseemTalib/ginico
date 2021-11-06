import React from "react";

function Tab4() {
  return (
    <>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label"> What is your Employer’s company name? </label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label"> What is your job title?</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label"> What is your Employee Identification Number?</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label">63. What was your annual income last year? </label>
          <select className="form-control" name="password" required autofocus>
            <option>0 – 30,000,</option>
            <option>30,000 – 50,000,</option>
            <option>50,000 – 60,000,</option>
            <option>60,000 –75,000,</option>
            <option>75,000 – 90,000,</option>
            <option>90,000 – 125,000,</option>
            <option>125,000 – 150,000,</option>
            <option>150,000 – 200,000,</option>
            <option>200,000 – 500,000,</option>
            <option>500,000 – 1million,</option>
            <option>1mil +,</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label"> Are you an active member of a Trade or Labor Union? </label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label"> what is the name of your Trade or Labor Union?</label>
          <input type="text" className="form-control" name="zip" defaultValue required autoFocus />
        </div>
      </div>
      <div className="form-group">
        <div className="col-md-12">
          <label className="control-label"> What is your individual trade or union membership number? </label>
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

export default Tab4;
