import React from "react";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

function Index() {
  return (
    <div>
      <Navbar />
      <div className="default-padding">
        <div className="form-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="white-popup-block-form">
                  <h4 className="title">Bank Details</h4>
                  <div className="form-signin" action id="login-form">
                    <div className="login-wrap">
                      <div className="user-login-info">
                        <form className="form-horizontal" method="POST" action="http://test.ginicoe.com/login">
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is Your First Name?</label>
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
                              <label className=" control-label">What is Your Last/SurName?</label>
                              <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                onkeypress="return (event.charCode > 64 && 
  
      event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="Last Name"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is the Name of the Financial Institution (FI)?</label>
                              <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                onkeypress="return (event.charCode > 64 && 
      event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="Financial Institution (FI)"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Who is the Primary contact ?</label>
                              <select className="form-control" name="password" required autofocus>
                                <option>LN</option>
                                <option>FN</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is the primary contact’s Job Title? </label>
                              <select className="form-control" name="password" required autofocus>
                                <option>Bank Credit Clerk</option>
                                <option>Bank Foreign-Exchange Dealer</option>
                                <option>Bank Teller</option>
                                <option>Bond Sales Manager</option>
                                <option>Bond Sales Officer</option>
                                <option>Bond Trading Manger</option>
                                <option>Branch Manager – Insurance</option>
                                <option>Branch Manager Trainee</option>
                                <option>Branch Manager</option>
                                <option>Branch Review Specialist</option>
                                <option>Branch Review Team Lead</option>
                                <option>Branch Service Representative I</option>
                                <option>Branch Service Representative IiI/option&gt;</option>
                                <option>Branch Service Representative III</option>
                                <option>Branch Service Specialist</option>
                                <option>Budget Analyst I </option>
                                <option>Budget Analyst II</option>
                                <option>Budget Analyst III</option>
                                <option>Budget Analyst Iv</option>
                                <option>Budgeting Supervisor I</option>
                                <option>Budgeting Supervisor II</option>
                                <option>Budgeting Supervisor III </option>
                                <option>Business Banking Development Officer I</option>
                                <option>Business Banking Manger I, II</option>
                                <option>Business Banking Manger II </option>
                                <option>Business Development Officer </option>
                                <option>Business Development Officer (Select Customer) Senior</option>
                                <option>Business Systems Executive</option>
                                <option>Business Systems Manager</option>
                                <option>Business Systems Officer</option>
                                <option>Cash Management Manger</option>
                                <option>Cash Management Officer I</option>
                                <option>Cash Management Service Manager</option>
                                <option>Cash Management Service Representative I</option>
                                <option>Cash Management Service Representative II</option>
                                <option>Cash Management Service Representative III</option>
                                <option>Cash Management Service Supervisor</option>
                                <option>Check Collections Manager</option>
                                <option>Check Processing Manager</option>
                                <option>Check Processor</option>
                                <option>Checking / Debit Card Business Manager</option>
                                <option>Chief Lending Officer Client Services Representative</option>
                                <option>Collateral Appraiser I, II</option>
                                <option>Collateral Appraiser II</option>
                                <option>Collateral Manager</option>
                                <option>Collections Representative I</option>
                                <option>Collections Representative II</option>
                                <option>Collections Representative III</option>
                                <option>Commercial Credit Analyst I</option>
                                <option>Commercial Credit Analyst II </option>
                                <option>Commercial Credit Analyst III</option>
                                <option>Commercial Loan Officer</option>
                                <option>Float Manager</option>
                                <option>Floor Banker</option>
                                <option>Head Bank Teller</option>
                                <option>Loan Officer</option>
                                <option>Mortgage Originator</option>
                                <option>Mortgage Payment Processing Clerk</option>
                                <option>Mortgage Processor</option>
                                <option>Mortgage Underwriter</option>
                                <option>Operations</option>
                                <option>Personal Loan Officer</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Who is the Secondary or Alternate contact?</label>
                              <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                onkeypress="return (event.charCode > 64 && 
      event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="Secondary’s  Fn"
                                required
                                autofocus
                              />
                              <br />
                              <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                onkeypress="return (event.charCode > 64 && 
      event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="Secondary’s Ln"
                                required
                                autofocus
                              />
                              <br />
                              <input type="number" className="form-control" name="first_name" placeholder="Telephone Number" required autoFocus />
                              <br />
                              <input type="text" className="form-control" name="first_name" placeholder="Fax Number" required autoFocus />
                              <br />
                              <input type="email" className="form-control" name="first_name" placeholder="E-Mail Address" required autoFocus />
                              <br />
                              <input type="number" className="form-control" name="first_name" placeholder="Alternate Telephone Number" required autoFocus />
                              <br />
                              <input type="text" className="form-control" name="first_name" placeholder="Fax Number (If Different Than Primary)" required autoFocus />
                              <br />
                              <input type="number" className="form-control" name="first_name" placeholder="Mobile" required autoFocus />
                              <br />
                              <input type="email" className="form-control" name="first_name" placeholder="E-Mail Address" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <p>What Type of Financial Institution (FI) do you represent</p>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	Acquirers"> Acquirers</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Internet Bank"> Internet Bank</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Asset Management Company"> Asset Management Company</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Investment Bank"> Investment Bank</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Bond Brokerage Firm"> Bond Brokerage Firm</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Management Investment Company"> Investment Company</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Check Cashing Company"> Check Cashing Company</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	Mortgage Banks"> Mortgage Banks</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	Commercial banks "> Commercial banks </label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="   	Mutual Bank"> Mutual Bank</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	Community Bank "> Community Bank </label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="   	Payday Lender"> Payday Lender</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	Community Development Financial Institution "> Development Financial Inst</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="   	Savings & Loan"> Savings &amp; Loan</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	Credit Union  "> Credit Union </label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="    	Shadow Bank"> Shadow Bank</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	 	Discount Brokerage Bonds  "> Discount Brokerage Bonds </label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	Stock Brokerage Firm"> Stock Brokerage Firm</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	  	Discount Brokerage Stocks  "> Discount Brokerage Stocks </label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	 	Title Company"> Title Company</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	 	Face Amount Certificate Company "> FaceAmount Certificate</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	  	Unit Investment Trusts (UIT)"> Unit Investment Trusts (UIT)</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Full Brokerage Bonds "> Full Brokerage Bonds </label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	Full Brokerage Stocks"> Full Brokerage Stocks</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	Hedge Funds "> Hedge Funds </label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Insurance Company"> Insurance Company</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label"> What Type of Charter is Your FI?</label>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	Hedge Funds "> Federal </label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Insurance Company"> State</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What State is Your Charter In?</label>
                              <input
                                type="tel"
                                className="form-control"
                                name=" "
                                onkeypress="return (event.charCode > 64 && 
      event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="Charter In"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <p> Does Your FI Operate Across State Lines? </p>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" />
                                    <label className="form-check-label">Yes</label>
                                  </div>
                                </div>
                                <div className="col-md-6" />
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" defaultChecked />
                                  <label className="form-check-label">No</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className="control-label">What is the Total Asset Size of Your Global FI ? </label>
                              <select className="form-control" name="password" required autofocus>
                                <option>Small - &lt; = $290 Million</option>
                                <option>Intermediate - $290 Million - $1.16 Billion</option>
                                <option>Large - $1.16 Billion = &gt;</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <p>Check All Deliverables That Your Financial Institution Performs</p>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id="alternative_invesment " name="alternative_invesment " />
                                  <label htmlFor=" Alternative Investments"> Alternative Investments</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="Initial Public Offerings (IPOs)"> Initial Public Offerings (IPOs)</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" Auto loans"> Auto loans</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="	Institutional Client Broker "> Institutional Client Broker</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	Bonds"> Bonds</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Insurance products ">Insurance products</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Business Banking Accounts"> Business Banking Accounts</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Investment Banking "> Investment Banking </label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="Business Banking Loans"> Business Banking Loans</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Mergers and Acquisitions Facilitator"> Mergers Acquisitions Facilitator</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Car Insurance"> Car Insurance</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Mortgage loans"> Mortgage loans</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Checking account"> Checking account</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Mutual Funds Closed-ended"> Mutual Funds Closed-ended</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="  	Commercial Appraisals"> Commercial Appraisals</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Mutual Funds Open-ended"> Mutual Funds Open-ended</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Casualty Insurance"> Casualty Insurance</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" Personal loans">Personal loans</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Commercial Paper"> Commercial Paper</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="property Insurance">Property Insurance</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="Commercial Real Estate Loans"> Commercial Real Estate Loans</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="	Public / Private Share Offerings"> Public / Private Share Offerings</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="Corporate Reorganizations"> Corporate Reorganizations</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Residential Appraisals"> Residential Appraisals</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Death Insurance"> Death Insurance</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Savings accounts"> Savings accounts</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Debit cards"> Debit cards</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Stocks"> Stocks</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="Demand deposits"> Demand deposits</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	SWIFT"> SWIFT</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Disability Insurance"> Disability Insurance</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Tax Deferred Annuity"> Tax Deferred Annuity</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Equity Offerings"> Equity Offerings</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Trading">Trading</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Exchange Traded Funds (ETFs)"> Exchange Traded Funds</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Underwriting Debit"> Underwriting Debit</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Fire Insurance"> Fire Insurance</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Wealth advisor"> Wealth advisor</label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" Health Insurance"> Health Insurance</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor=" 	Wire Transfers"> Wire Transfers</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is Your Bank Identification Number (BIN)? </label>
                              <input type="number" className="form-control" name=" " onkeypress="return restrictAlphabets(event)" placeholder="Bank Identification Number (BIN)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className="control-label">What is the Daily Trade Volume in Your Department/Division/Unit?</label>
                              <select className="form-control" name="password" required autofocus>
                                <option>10,000 &lt; trans p/day</option>
                                <option>10,000 – 30,000 trans p/day</option>
                                <option>30,000 – 50,000 trans p/day</option>
                                <option>50,000 – 1,000,000 trans p/day</option>
                                <option>1,000,000&gt; trans p/day</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className="text-left">What is the Portfolio Size of Your Deliverables? Please show the size in U.S. Dollars</label>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Mortgage Loans $</label>
                              <input type="number" className="form-control" name=" " onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Credit Cards $</label>
                              <input type="number" className="form-control" name=" " onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Debit Cards $</label>
                              <input type="number" className="form-control" name=" " onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Wealth Advisor $</label>
                              <input type="number" className="form-control" name=" " onkeypress="return restrictAlphabets(event)" required autoFocus />
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
