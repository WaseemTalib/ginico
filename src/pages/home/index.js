import React from "react";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

function Index() {
  return (
    <div>
      {/* Header ============================================= */}
     <Navbar />
     
      <div className="default-padding">
        <div className="form-area">
          <div className="container">
            {/*<img src="../images/Banner.png" > */}
            <div className="row">
              <div className="col-lg-6">
                <div className="white-popup-block-form">
                  <h4 className="title">Education Forms</h4>
                  <div className="form-signin" action id="login-form">
                    <div className="login-wrap">
                      <div className="user-login-info">
                        <form className="form-horizontal" method="POST" action="http://test.ginicoe.com/login">
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is your First Name?</label>
                              <input
                                type="text"
                                className="form-control"
                                name="bussiness_name"
                                onkeypress="return (event.charCode > 64 && 
      event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                autoFocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className="control-label">What is your Last Name?</label>
                              <input
                                type="text"
                                className="form-control"
                                name="business_dba"
                                onkeypress="return (event.charCode > 64 && 
      event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                autoFocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is the Physical Building Number of your work site?</label>
                              <input
                                type="text"
                                className="form-control"
                                name="business_address"
                                onkeypress="return (event.charCode > 64 && 
      event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                autoFocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is the Physical Apartment, Office, Suite, Number of your work site?</label>
                              <input
                                type="text"
                                className="form-control"
                                name="city"
                                onkeypress="return (event.charCode > 64 && 
      event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                autoFocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What U.S. State do you work from?</label>
                              <input
                                type="text"
                                className="form-control"
                                name="state"
                                onkeypress="return (event.charCode > 64 && 
      event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                autoFocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What U.S. City, Town, Village, Hamlet, Parish, etc. do you work from?</label>
                              <input
                                type="text"
                                className="form-control"
                                onkeypress="return (event.charCode > 64 && 
      event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                name="zip"
                                required
                                autoFocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is a good telephone number to reach you at?</label>
                              <input type="text" className="form-control" name="business_physical" defaultValue required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is your work email address?</label>
                              <input type="email" className="form-control" name="city" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label"> What is your work email address?</label>
                              <input type="text" className="form-control" name="zip" placeholder="Email Address" onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label"> What is your school's website?</label>
                              <input type="text" className="form-control" name="zip" placeholder="What is your school's website?" onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label"> What is the Name of Your Educational School? </label>
                              <input
                                type="text"
                                className="form-control"
                                name="zip"
                                placeholder="What is the Name of Your Educational School?"
                                onkeypress="return restrictAlphabets(event)"
                                required
                                autoFocus
                              />
                            </div>
                          </div>
                          <p>
                            We apologize that your Educational Institution is not yet listed with us. Please complete this form and one of our Education specialist will contact you within 48 hours to
                            listen to your needs. Thank you for selecting Ginicoe
                          </p>
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
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* Start Footer 
      ============================================= */}
    </div>
  );
}

export default Index;
