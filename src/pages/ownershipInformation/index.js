import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

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
                  <h4 className="title">Merchant Information</h4>
                  <div className="form-signin" action id="login-form">
                    <div className="login-wrap">
                      <div className="user-login-info">
                        <form className="form-horizontal" method="POST" action="http://test.ginicoe.com/login">
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Owner/Partner</label>
                              <input
                                type="text"
                                className="form-control"
                                name="owner"
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="Owner/Partner"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">First Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="First Name"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Middle Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="middle_name"
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="Middle Name"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className="control-label">Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                placeholder="Last Name"
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Social Security Number</label>
                              <input
                                type="number"
                                className="form-control"
                                name="social_security_number"
                                onkeypress="return restrictAlphabets(event)"
                                placeholder="Social Security Number"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Title in Bussines</label>
                              <input
                                type="text"
                                className="form-control"
                                name="title_in_bussines"
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="Title in Bussines"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Telephone Number</label>
                              <input type="tel" className="form-control" name="telephone_number" onkeypress="return restrictAlphabets(event)" placeholder="Telephone Number" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Ownership Percentage</label>
                              <input
                                type="text"
                                className="form-control"
                                name="ownership_percentage"
                                onkeypress="return restrictAlphabets(event)"
                                placeholder="Ownership Percentage"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">DOB</label>
                              <input type="date" className="form-control" name="dob" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Home Address</label>
                              <input
                                type="text"
                                className="form-control"
                                name="home_address"
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="Home Address"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">City</label>
                              <input
                                type="text"
                                className="form-control"
                                name="city"
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="City"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">State</label>
                              <input
                                type="text"
                                className="form-control"
                                name="state"
                                placeholder="State"
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Zip</label>
                              <input type="text" className="form-control" onkeypress="return restrictAlphabets(event)" name="zip" placeholder="Zip" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className="control-label">Structure of Business </label>
                              <select className="form-control" name="password" required autofocus>
                                <option>C-Corp</option>
                                <option>Contractorship</option>
                                <option>Cooperative</option>
                                <option>DBA</option>
                                <option>LLC</option>
                                <option>S-Corp</option>
                                <option>PC</option>
                                <option>Sole Proprietorship</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className="control-label">Are you a home based business? </label>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                      Yes
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-6" />
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is Number of Employee at physical location?</label>
                              <select className="form-control" name="password" required autofocus>
                                <option>1-50/</option>
                                <option>1-50</option>
                                <option>50-100</option>
                                <option>100-500</option>
                                <option>500-1000</option>
                                <option>1000-5000</option>
                                <option>5000-10000</option>
                                <option>10000+</option>
                              </select>
                            </div>
                          </div>
                          {/*										   <div class="form-group">*/}
                          {/*                                               <div class="col-md-12"> */}
                          {/*                                                <label class=" control-label">Sales in Dollars Per Month</label>*/}
                          {/*                                                <select class="form-control" name="password" required  autofocus>*/}
                          {/*                                                <option>   0 – 3000/</option>*/}
                          {/*<option>3000 – 10,000/</option>*/}
                          {/*<option>10,000 – 100,000/</option>*/}
                          {/*<option>100,000+</option>*/}
                          {/*                                                   </select>*/}
                          {/*                                             </div>*/}
                          {/*                            </div> */}
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What Merchant Level Category are you </label>
                              <br />
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                      Level 1: Merchants processing over 6 million card transactions per year
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault2"
                                      data-placement="right"
                                      title="Payment Card Industry Data Security Standard (PCI DSS) Level 2 merchants are those that process between 1 and 6 million Visa, Mastercard, and Discover transactions per year; 50,000 to 2 million sales using American Express, and fewer than 1 million JCB International credit card transactions"
                                    >
                                      Level 2: Merchants processing 1 to 6 million transactions per year. <small style={{ color: "blue" }}>What is This?</small>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault2"
                                      data-placement="right"
                                      title="Any merchant with more than 20,000 combined Mastercard and Maestro e-commerce transactions annually but less than or equal to one million total combined Mastercard and Maestro e-commerce transactions annually"
                                    >
                                      Level 3: Merchants handling 20,000 to 1 million transactions per year. <small style={{ color: "blue" }}>What is This?</small>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault2"
                                      data-placement="right"
                                      title="Merchants processing less than 20,000 Visa or Mastercard e-commerce transactions annually. All other merchants processing up to 1 million Visa or Mastercard transactions annually"
                                    >
                                      Level 4: Merchants handling fewer than 20,000 transactions per year. <small style={{ color: "blue" }}>What is This?</small>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*               <br>*/}
                          {/*                       Tier II*/}
                          {/*                       <div class="row">*/}
                          {/*     <div class="col-md-6">*/}
                          {/*     <div class="form-check">*/}
                          {/*        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">*/}
                          {/*        <label class="form-check-label" for="flexRadioDefault1">*/}
                          {/*          Yes*/}
                          {/*        </label>*/}
                          {/*      </div>*/}
                          {/*      </div>*/}
                          {/*      <div class="col-md-6"></div>*/}
                          {/*      <div class="form-check">*/}
                          {/*        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>*/}
                          {/*        <label class="form-check-label" for="flexRadioDefault2">*/}
                          {/*          No*/}
                          {/*        </label>*/}
                          {/*      </div>*/}
                          {/*      </div>*/}
                          {/*                       <br>*/}
                          {/*                       Tier III   */}
                          {/*                       <div class="row">*/}
                          {/*     <div class="col-md-6">*/}
                          {/*     <div class="form-check">*/}
                          {/*        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">*/}
                          {/*        <label class="form-check-label" for="flexRadioDefault1">*/}
                          {/*          Yes*/}
                          {/*        </label>*/}
                          {/*      </div>*/}
                          {/*      </div>*/}
                          {/*      <div class="col-md-6"></div>*/}
                          {/*      <div class="form-check">*/}
                          {/*        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>*/}
                          {/*        <label class="form-check-label" for="flexRadioDefault2">*/}
                          {/*          No*/}
                          {/*        </label>*/}
                          {/*      </div>*/}
                          {/*      </div>*/}
                          {/*                 </div>*/}
                          {/*</div> */}
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is the Name of your merchant bank or Acquirer? </label>
                              <select className="form-control" name="password" required autofocus>
                                <option> Apogee Payment Systems</option>
                                <option> Approval Payment Solutions</option>
                                <option> Bank of America Merchant Services (Fiserv)</option>
                                <option> Bank of Hawaii</option>
                                <option> BankCard Services</option>
                                <option> BB&amp;T Merchant Services (Fiserv)</option>
                                <option> BBVA Compass (Fiserv)</option>
                                <option> C&amp;H Financial Services</option>
                                <option> Cayan, formally TSYS, now Global Payments</option>
                                <option> ChasePayment Tech</option>
                                <option> Citi Merchant Services (Fiserv)</option>
                                <option> Citizens Bank (FIS)</option>
                                <option> Clearent</option>
                                <option> Commerce Bancshares</option>
                                <option> Commercial Bank of California</option>
                                <option> Complete Merchant Solutions</option>
                                <option> Elavon</option>
                                <option> Electronic Merchant Systems</option>
                                <option> Electronic Payments</option>
                                <option> Epicor Sofware</option>
                                <option> eVance Processing</option>
                                <option> EVO Payments International</option>
                                <option> First American Payment Systems </option>
                                <option> First Citizens Bank</option>
                                <option> First Data, now Fiserv</option>
                                <option> First Hawaiian Bank</option>
                                <option> Fulton Merchant Card Services</option>
                                <option> Global Payments</option>
                                <option> Gravity Payments</option>
                                <option> Heartland, now Global Payments</option>
                                <option> I3 Verticals</option>
                                <option> Integrity Payment Systems</option>
                                <option> Intrix Technology</option>
                                <option> Intuit – Quickbooks (Owned by Fiserv)</option>
                                <option> iPayment</option>
                                <option> </option>
                                <option> JetPay</option>
                                <option> KeyBank (Fiserv)</option>
                                <option> M&amp;T Bank (Fiserv)</option>
                                <option> Mainstream Merchant Services</option>
                                <option> Merchant e-Solutions</option>
                                <option> Merrick Bank</option>
                                <option> MLS Direct Network</option>
                                <option> NCMIC Finance Corporation</option>
                                <option> Newtek Merchant Solutions</option>
                                <option> North American Bancard</option>
                                <option> North American Payment Solutions</option>
                                <option> Paragon Payment Solutions</option>
                                <option> Paya</option>
                                <option> PaySafe</option>
                                <option> PNC Merchant Services (Fiserv)</option>
                                <option> Priority Payment Systems</option>
                                <option> Redwood Merchant Services</option>
                                <option> Retriever Medical Dental Payments</option>
                                <option> Santander Merchant Services (Fiserv)</option>
                                <option> Security BankCard Center</option>
                                <option> Shift4 Payments</option>
                                <option> SunTrust Merchant Services (Fiserv)</option>
                                <option> TD Bank (Fiserv)</option>
                                <option> Transfund Merchant Services</option>
                                <option> TSYS, now Global Payments</option>
                                <option> Umpqua Bank</option>
                                <option> UMS Banking</option>
                                <option> United Merchant Services</option>
                                <option> Vantiv, now FIS</option>
                                <option> Wells Fargo Merchant Services (Fiserv)</option>
                                <option> WorldPay, now FIS</option>
                              </select>
                              <br />
                              <input
                                type="text"
                                className="form-control"
                                name="account_manger"
                                defaultValue
                                placeholder="Account manger’s FN"
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Account manager’s physical address</label>
                              <input
                                type="text"
                                className="form-control"
                                name="physical_address"
                                defaultValue
                                placeholder="Physical Address"
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">City</label>
                              <input
                                type="text"
                                className="form-control"
                                name="city"
                                placeholder="City"
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">State</label>
                              <input
                                type="text"
                                className="form-control"
                                name="state"
                                placeholder="State"
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Postal code</label>
                              <input type="text" className="form-control" name="zip" defaultValue placeholder="Postal code" onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Telephone Number</label>
                              <input type="tel" className="form-control" name="telephone_number" onkeypress="return restrictAlphabets(event)" placeholder="Telephone Number" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Account Manager Email Address</label>
                              <input
                                type="email"
                                className="form-control"
                                name="account_manager_email_address"
                                onkeypress="return (event.charCode > 64 && 

				                 event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="Account Manager Email Address"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What Industry best describes your business? </label>
                              <select className="form-control" name="password" required autofocus>
                                <option> Accommodation and Food Services</option>
                                <option></option>
                                <option>Administrative and Support and Waste Management and Remediation Services</option>
                                <option></option>
                                <option>Agriculture</option>
                                <option></option>
                                <option>Arts, Entertainment and Recreation</option>
                                <option></option>
                                <option>Communication</option>
                                <option></option>
                                <option>Electric </option>
                                <option></option>
                                <option> Gas </option>
                                <option></option>
                                <option> Solar </option>
                                <option></option>
                                <option> water and sewage </option>
                                <option></option>
                                <option> wind </option>
                                <option></option>
                                <option>Construction</option>
                                <option></option>
                                <option>Educational Services</option>
                                <option></option>
                                <option>Finance and Insurance</option>
                                <option></option>
                                <option>fishing</option>
                                <option></option>
                                <option>Forestry</option>
                                <option></option>
                                <option>Health Care and Social Assistance</option>
                                <option></option>
                                <option>Hunting</option>
                                <option />
                                <option></option>
                                <option>Information</option>
                                <option></option>
                                <option>Management of Companies (holding companies)</option>
                                <option></option>
                                <option>Manufacturing</option>
                                <option></option>
                                <option>Mining</option>
                                <option></option>
                                <option>Other Services</option>
                                <option></option>
                                <option>Professional, Scientific, and Technical Services</option>
                                <option></option>
                                <option>Real-estate and Rental and Leasing</option>
                                <option></option>
                                <option>Retail Trade</option>
                                <option></option>
                                <option>Transportation and Warehousing</option>
                                <option></option>
                                <option>Travel</option>
                                <option></option>
                                <option>Utilities</option>
                                <option></option>
                                <option>Utility Company </option>
                                <option></option>
                                <option>Wholesale Trade</option>
                                <option></option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is your EIN Number</label>
                              <input type="text" className="form-control" name="terminal_software" onkeypress="return restrictAlphabets(event)" placeholder="EIN Number" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">
                                <a style={{ color: "blue" }} href="http://www.dm.usda.gov/procurement/card/card_x/mcc.pdf">
                                  What is
                                </a>{" "}
                                your Primary line of Business?{" "}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="terminal_software"
                                onkeypress="return (event.charCode > 64 && 

				                 event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="primary line of business"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">
                                <a
                                  data-placement="right"
                                  title="This links is being provided as a convenience and for informational purposes only; It does not constitute an endorsement or an approval by Ginicoe Corporation or its Subsidiaries of any of the products, services or opinions of the corporation or organization or individual. The Ginicoe Corporation or its Subsidiaries bears no responsibility for the accuracy, legality or content of the external site or for that of subsequent links. Contact the external site for answers to questions regarding its content."
                                  style={{ color: "blue" }}
                                >
                                  What is your
                                </a>{" "}
                                2017 NAICS Code?
                              </label>
                              <input type="text" className="form-control" name="terminal_software" onkeypress="return restrictAlphabets(event)" placeholder="NAICS Code" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label" style={{ textAlign: "left" }}>
                                What is the your worldwide{" "}
                                <a
                                  data-placement="right"
                                  title="denoting or relating to a type of retail that integrates the different methods of shopping available to consumers (e.g., online, in a physical store, or by phone, brick-n-mortar POS, brick-n-mortar point of interaction (POI) e.g. customer counter, office desk, front desk, branch window, facial video, etc. for POI ; Any and All Card present transactions, E-commerce, Internet browser, chat bot, mobile device, mobile proximity payment, Tap-n-Go, Call Center, Voice or Telephone Order, Mail Order, Fax Order"
                                  style={{ color: "blue" }}
                                >
                                  omnichannel{" "}
                                </a>
                                estimated number of POS terminals, card readers, kiosks, or{" "}
                                <a
                                  data-placement="right"
                                  title="The term “access device” means any card, plate, code, account number, electronic serial number, mobile identification number, personal identification number, or other telecommunications service, equipment, or instrument identifier, or other means of account access that can be used, alone or in conjunction with another access device, to obtain money, goods, services, or any other thing of value, or that can be used to initiate a transfer of funds (other than a transfer originated solely by paper instrument)"
                                  style={{ color: "blue" }}
                                >
                                  Access device{" "}
                                </a>
                                as defined in 18 USC § 1029(e)(1)
                              </label>
                              <input type="text" className="form-control" name="terminal_software" onkeypress="return restrictAlphabets(event)" placeholder required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is the Estimated number of POS</label>
                              <select className="form-control">
                                <option>1- 100</option>
                                <option>100-500</option>
                                <option>500-1000</option>
                                <option>1000-5000</option>
                                <option>5000- 1,000,000</option>
                                <option>1,000,000 – 5,000,000</option>
                                <option>5,000,000&gt; </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Who is your POS Manufactuer? </label>
                              <select className="form-control" name="password" required autofocus>
                                <option> Altametrics</option>
                                <option></option>
                                <option>Cantaloupe, Inc.</option>
                                <option></option>
                                <option>Casio</option>
                                <option></option>
                                <option>CenterEdge Software</option>
                                <option></option>
                                <option>Cherry (company)</option>
                                <option></option>
                                <option>Clover Network</option>
                                <option></option>
                                <option>Cybertill</option>
                                <option></option>
                                <option>Digital Research</option>
                                <option></option>
                                <option>EFTPOS</option>
                                <option></option>
                                <option>Epos Now</option>
                                <option></option>
                                <option>Epson</option>
                                <option></option>
                                <option>Erply</option>
                                <option></option>
                                <option>ERPNext</option>
                                <option></option>
                                <option>Fujitsu</option>
                                <option></option>
                                <option />
                                <option>Gilbarco Veeder-Root</option>
                                <option></option>
                                <option>Hisense</option>
                                <option></option>
                                <option>Hypercom</option>
                                <option></option>
                                <option>I Love Velvet</option>
                                <option></option>
                                <option>IBM</option>
                                <option></option>
                                <option>Imonggo</option>
                                <option></option>
                                <option>Ingenico</option>
                                <option></option>
                                <option>Integrated Systems Inc.</option>
                                <option></option>
                                <option>Intelligent Micro Software</option>
                                <option></option>
                                <option>Itautec</option>
                                <option></option>
                                <option>Kounta (software company)</option>
                                <option></option>
                                <option>Lightspeed (company)</option>
                                <option></option>
                                <option>Microinvest</option>
                                <option></option>
                                <option>Micros Systems</option>
                                <option></option>
                                <option>MYOB (company)</option>
                                <option></option>
                                <option>NCR Corporation</option>
                                <option></option>
                                <option>NEC</option>
                                <option></option>
                                <option>Nexgo</option>
                                <option></option>
                                <option>Openbravo</option>
                                <option></option>
                                <option>Panasonic</option>
                                <option></option>
                                <option>PAX Technology</option>
                                <option></option>
                                <option>POS Solutions</option>
                                <option></option>
                                <option>Radiant Systems</option>
                                <option></option>
                                <option>Retalix</option>
                                <option></option>
                                <option>Revel Systems</option>
                                <option></option>
                                <option>Samsung Electronics</option>
                                <option></option>
                                <option>Sharp Corporation</option>
                                <option></option>
                                <option>Shopify</option>
                                <option></option>
                                <option>ShopKeep</option>
                                <option></option>
                                <option>Simpay (company)</option>
                                <option></option>
                                <option>Square, Inc.</option>
                                <option></option>
                                <option>Squirrel Systems</option>
                                <option></option>
                                <option>Star Micronics</option>
                                <option></option>
                                <option>Talech</option>
                                <option></option>
                                <option>Ticketer</option>
                                <option></option>
                                <option>Tiller Systems (software)</option>
                                <option></option>
                                <option>Toast, Inc.</option>
                                <option></option>
                                <option>Toshiba</option>
                                <option></option>
                                <option>TouchBistro Inc.</option>
                                <option></option>
                                <option>TRANZ 330</option>
                                <option></option>
                                <option>US Bankcard Services Inc</option>
                                <option></option>
                                <option>Vend (software)</option>
                                <option></option>
                                <option>Verifone</option>
                                <option></option>
                                <option>Wincor Nixdorf</option>
                                <option></option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Have you experienced an account data compromise?</label>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                      Yes
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-6" />
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">if yes , When?</label>
                              <input type="date" className="form-control" name="when" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <p>
                                Do you use point of sale terminal hardware and software, or a PCI DSS Certified Internet Gateway Provider, supplied by a merchant service provider, and do you confirm
                                that you do not store cardholder data?
                              </p>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                      Yes
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-6" />
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <p>If No, then what third party software company / vendor did you purchase your POS application from?</p>
                              <input
                                type="text"
                                className="form-control"
                                name="name_of_terminal"
                                onkeypress="return (event.charCode > 64 && 

				                 event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is the name of the third party software?</label>
                              <input
                                type="text"
                                className="form-control"
                                name="name_of_terminal"
                                onkeypress="return (event.charCode > 64 && 

				                 event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What version number?</label>
                              <input type="text" className="form-control" name="name_of_terminal" onkeypress="return restrictAlphabets(event)" placeholder="version Number" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <p>Do your transactions process through any other third parties, web hosting companies or gateways?</p>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                      Yes
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-6" />
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">If yes, with whom?</label>
                              <input
                                type="text"
                                className="form-control"
                                name="name_of_terminal"
                                onkeypress="return (event.charCode > 64 && 

				                 event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <p>Do you or your vendor receive, pass, transmit or store the full cardholder number, electronically? </p>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                      Yes
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-6" />
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <p>If yes, where is the card data stored? </p>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="flexRadioDefault" />
                                    <label className="form-check-label">Merchant</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="flexRadioDefault" defaultChecked />
                                    <label className="form-check-label">Third Party Only</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="flexRadioDefault" />
                                    <label className="form-check-label">Merchant &amp; Third Party</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="flexRadioDefault" />
                                    <label className="form-check-label">GAA Export Only</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <p>Are you or your vendor PCI/DSS compliant? </p>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                      Yes
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-6" />
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is the name of your Qualified Security Assessor?</label>
                              <input
                                type="text"
                                className="form-control"
                                name="terminal_software"
                                onkeypress="return (event.charCode > 64 && 

				                 event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="Name of your Qualified Security Assessor"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Date of Compliance</label>
                              <input type="date" className="form-control" name="total_cost_loss" />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label"> Date of last scan</label>
                              <input type="date" className="form-control" name="total_cost_loss" />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label"> What is your work email address? </label>
                              <input type="text" className="form-control" name="zip" defaultValue placeholder="Email Address" onkeypress="return restrictAlphabets(event)" required autoFocus />
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
  );
}

export default Index;
