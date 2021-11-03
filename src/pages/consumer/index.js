import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

function Index() {
    return (
        <div>
            <Navbar />
          <div className="default-padding">
        <div className="form-area">
          <div className="container">
            {/*<img src="../images/Banner.png" > */}
            <div className="row">
              <div className="col-lg-6">
                <div className="white-popup-block-form">
                  <h4 className="title">CONSUMER   Forms</h4>
                  <div className="form-signin" action id="login-form">
                    <div className="login-wrap">
                      <div className="user-login-info">
                        <form className="form-horizontal" method="POST" action="http://test.ginicoe.com/login">
                          <div className="form-group">
                            <div className="col-md-12"> 
                              <label className=" control-label">What is Your Pedigree Info?</label>
                              <input type="text" className="form-control" name="bussiness_name" onkeypress="return (event.charCode > 64 && 
	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" required autoFocus />
                            </div>
                          </div> 
                          <div className="form-group"> 
                            <div className="col-md-12">
                              <label className="control-label">What is your Communication Channels?</label>
                              <input type="text" className="form-control" name="business_dba" onkeypress="return (event.charCode > 64 && 
	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" required autoFocus />
                            </div> 
                          </div> 
                          <div className="form-group">
                            <div className="col-md-12"> 
                              <label className=" control-label">What is your Gender Identity Information?</label>
                              <input type="text" className="form-control" name="business_address" onkeypress="return (event.charCode > 64 && 
	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" required autoFocus />
                            </div>
                          </div> 
                          <div className="form-group">
                            <div className="col-md-12"> 
                              <label className=" control-label">What is your Ethnicity Information?</label>
                              <input type="text" className="form-control" name="city" onkeypress="return (event.charCode > 64 && 
	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" required autoFocus />
                            </div>
                          </div> 
                          <div className="form-group">
                            <div className="col-md-12"> 
                              <label className=" control-label">Neighborhood?</label>
                              <input type="text" className="form-control" name="state" onkeypress="return (event.charCode > 64 && 
	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" required autoFocus />
                            </div>
                          </div> 
                          <div className="form-group">
                            <div className="col-md-12"> 
                              <label className=" control-label">What your Employment Information?</label>
                              <input type="text" className="form-control" onkeypress="return (event.charCode > 64 && 
	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" name="zip" required autoFocus />
                            </div>
                          </div> 
                          <div className="form-group">
                            <div className="col-md-12"> 
                              <label className=" control-label"> I Want To Protect These Charge Cards?</label>
                              <input type="text" className="form-control" name="business_physical" defaultValue required autoFocus />
                            </div>
                          </div> 
                          <div className="form-group">
                            <div className="col-md-12"> 
                              <label className=" control-label">Head &amp; Face Info?</label>
                              <input type="email" className="form-control" name="city" required autoFocus />
                            </div>
                          </div> 
                          <div className="form-group">
                            <div className="col-md-12"> 
                              <label className=" control-label"> Hair? </label>
                              <input type="text" className="form-control" name="zip" defaultValue onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div> 
                          <div className="form-group">
                            <div className="col-md-12"> 
                              <label className=" control-label"> What is your Head Tattoos, Scars, and other distinguishing identifiers? </label>
                              <input type="text" className="form-control" name="zip" defaultValue onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12"> 
                              <label className=" control-label"> What is Your Medical Info? </label>
                              <input type="text" className="form-control" name="zip" defaultValue onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div> 
                          <div className="form-group">
                            <div className="col-md-12"> 
                              <label className=" control-label"> What is Your Family &amp; Medical History? </label>
                              <input type="text" className="form-control" name="zip" defaultValue onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div> 
                          <div className="form-group">
                            <div className="col-md-12"> 
                              <label className=" control-label"> What is Your Travel Information? </label>
                              <input type="text" className="form-control" name="zip" defaultValue onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div> 
                          <div className="form-group">
                            <button type="submit" className="btn btn-danger form-button" name="form-button" style={{float: 'left'}}>
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
        </div>
    )
}

export default Index
