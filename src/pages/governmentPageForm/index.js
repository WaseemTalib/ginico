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
            <div className="row">
              <div className="col-lg-6">
                <div className="white-popup-block-form">
                  <h4 className="title">GOVERNMENT FORMS</h4>
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
                              <label className=" control-label">What is Your Middle Name?</label>
                              <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder=" Middle Name"
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
                              <label className=" control-label">What is Your Title?</label>
                              <select className="form-control" name="password" required autofocus>
                                <option> Director </option>
                                <option> Chief</option>
                                <option> Section Head</option>
                                <option> Other </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className="control-label">What is your Office/Agencey Physical Bulding Number?</label>
                              <input type="number" className="form-control" name onkeypress="return restrictAlphabets(event)" required placeholder="Office/Agencey Physical Bulding Number" autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className="control-label">What is your Office / Agency Physical Street Name?</label>
                              <input
                                type="number"
                                className="form-control"
                                name
                                onkeypress="return (event.charCode > 64 && 

	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                required
                                placeholder="Office / Agency Physical Street Name"
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">
                                What is your Office / Agency Physical Building Number?
                                <br />
                                <small>For Puerto Rico and U.S. Virgin Islands only</small>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                name
                                onkeypress="return restrictAlphabets(event)"
                                placeholder="Office/Agencey Physical Urbanization Number"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is your Office/Agencey Physical Country</label>
                              <select className="form-control" name="password" required autofocus>
                                <option> LIB </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is your Office / Agency Physical State? </label>
                              <select className="form-control" name="password" required autofocus>
                                <option> LIB </option>
                                <option>U.S. States </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is your Office / Agency Physical County? </label>
                              <select className="form-control" name="password" required autofocus>
                                <option> LIB </option>
                                <option>U.S. Counties </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is your Office / Agency Physical City? </label>
                              <select className="form-control" name="password" required autofocus>
                                <option> LIB </option>
                                <option>U.S. City </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is your Office / Agency Physical Zip Code? </label>
                              <select className="form-control" name="password" required autofocus>
                                <option> LIB </option>
                                <option>U.S. Zip Code </option>
                              </select>
                              <br />
                              <input
                                type="text"
                                className="form-control"
                                name="federal_tax"
                                placeholder="Federal Tax ID"
                                onkeypress="return restrictAlphabets(event)"
                                pattern="(.){5,5}"
                                maxLength={5}
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          {/*<div class="form-group">*/}
                          {/*         <div class="col-md-12"> */}
                          {/*          <label class=" control-label">What is your Office / Agency Country Code? </label>*/}
                          {/*          <input  type="text" class="form-control" name=""  onkeypress='return restrictAlphabets(event)'  placeholder="Office / Agency Country Code" required autofocus>*/}
                          {/*          </div>*/}
                          {/*         </div> */}
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is your Office / Agency Primary Telephone Number? </label>
                              <input type="tel" name="PhoneIn" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">What is your Office / Agency Alternate Telephone Number? </label>
                              <input type="tel" name="PhoneIn" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Is Your Agency </label>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id="alternative_invesment " name="alternative_invesment " />
                                  <label htmlFor=" Alternative Investments"> Federal</label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="Initial Public Offerings (IPOs)"> State </label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id="alternative_invesment " name="alternative_invesment " />
                                  <label htmlFor=" Alternative Investments"> County </label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="Initial Public Offerings (IPOs)"> City </label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id="alternative_invesment " name="alternative_invesment " />
                                  <label htmlFor=" Alternative Investments"> Village </label>
                                </div>
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="Initial Public Offerings (IPOs)"> Township Parish </label>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input type="checkbox" id=" " name=" " />
                                  <label htmlFor="Initial Public Offerings (IPOs)"> Parish</label>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="col-md-12">
                                  <label className="control-label">What Sector Best Describes Your Agency?</label>
                                  <select className="form-control" name="password" required autofocus>
                                    <option>Border Surveillance</option>
                                    <option>Chemical Sector</option>
                                    <option>Commercial Facilities Sector</option>
                                    <option>Commercial Sector</option>
                                    <option>Critical Manufacturing Sector</option>
                                    <option>Dams Sector</option>
                                    <option>Defense Industrial Base Sector</option>
                                    <option>Emergency Services Sector</option>
                                    <option>Energy Sector</option>
                                    <option>Financial Services Sector</option>
                                    <option>Food and Agriculture Sector</option>
                                    <option>Government Facilities Sector</option>
                                    <option>Healthcare and Public Health Sector</option>
                                    <option>Homeland Security</option>
                                    <option>Information Technology Sector</option>
                                    <option>Materials, and Waste Sector</option>
                                    <option>Nuclear Reactors</option>
                                    <option>Transportation Systems Sector</option>
                                    <option>Waste and Wastewater Systems Sector</option>
                                    <option>Other? Please Describe</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="col-md-12">
                                  <label className=" control-label">What is the Name of the Agency that You Represent? </label>
                                  <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search Your Agency..." />
                                  <datalist id="datalistOptions">
                                    <option value="AbilityOne Commission"></option>
                                    <option value="Access Board"></option>
                                    <option value=" Administration for Children and Families (ACF)"></option>
                                    <option value=" Administration for Community Living"></option>
                                    <option value=" Administration for Native Americans"></option>
                                    <option value=" Administrative Conference of the United States"></option>
                                    <option value=" Administrative Office of the U.S. Courts"></option>
                                    <option value=" Advisory Council on Historic Preservation"></option>
                                    <option value=" Africa Command"></option>
                                    <option value=" African Development Foundation"></option>
                                    <option value=" Agency for Global Media"></option>
                                    <option value=" Agency for Healthcare Research and Quality (AHRQ)"></option>
                                    <option value=" Agency for International Development (USAID)"></option>
                                    <option value=" Agency for Toxic Substances and Disease Registry"></option>
                                    <option value=" Agricultural Marketing Service (AMS)"></option>
                                    <option value=" Agricultural Research Service"></option>
                                    <option value=" Agriculture Department (USDA)"></option>
                                    <option value=" Agriculture Library"></option>
                                    <option value=" Air Force"></option>
                                    <option value=" Air Force Reserve"></option>
                                    <option value=" Alcohol and Tobacco Tax and Trade Bureau"></option>
                                    <option value=" Alcohol, Tobacco, Firearms and Explosives Bureau (ATF)"></option>
                                    <option value=" Alhurra TV"></option>
                                    <option value=" American Battle Monuments Commission"></option>
                                    <option value=" AmeriCorps"></option>
                                    <option value=" AmeriCorps Seniors"></option>
                                    <option value=" Amtrak (AMTRAK)"></option>
                                    <option value=" Animal and Plant Health Inspection Service (APHIS)"></option>
                                    <option value=" Antitrust Division"></option>
                                    <option value=" Appalachian Regional Commission"></option>
                                    <option value=" Architect of the Capitol"></option>
                                    <option value=" Archives, National Archives and Records Administration (NARA)">"&gt;</option>
                                    <option value=" Arctic Research Commission"></option>
                                    <option value=" Armed Forces Retirement Home"></option>
                                    <option value=" Arms Control and International Security"></option>
                                    <option value=" Army"></option>
                                    <option value=" Army Corps of Engineers"></option>
                                    <option value=" Arthritis, Musculoskeletal and Skin Diseases, National Institute of"></option>
                                    <option value=" Bankruptcy Courts"></option>
                                    <option value=" Barry M. Goldwater Scholarship and Excellence in Education Program"></option>
                                    <option value=" Bonneville Power Administration"></option>
                                    <option value=" Botanic Garden"></option>
                                    <option value="Bureau of Alcohol and Tobacco Tax and Trade"></option>
                                    <option value=" Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF)"></option>
                                    <option value=" Bureau of Consular Affairs"></option>
                                    <option value=" Bureau of Consumer Financial Protection"></option>
                                    <option value=" Bureau of Economic Analysis (BEA)"></option>
                                    <option value=" Bureau of Engraving and Printing (BEP)"></option>
                                    <option value=" Bureau of Indian Affairs"></option>
                                    <option value=" Bureau of Industry and Security (BIS)"></option>
                                    <option value=" Bureau of International Labor Affairs"></option>
                                    <option value=" Bureau of Justice Statistics"></option>
                                    <option value=" Bureau of Labor Statistics"></option>
                                    <option value=" Bureau of Land Management (BLM)"></option>
                                    <option value=" Bureau of Ocean Energy Management"></option>
                                    <option value=" Bureau of Prisons (BOP)"></option>
                                    <option value=" Bureau of Reclamation"></option>
                                    <option value=" Bureau of Safety and Environmental Enforcement (BSEE)"></option>
                                    <option value=" Bureau of the Census"></option>
                                    <option value=" Bureau of the Fiscal Service"></option>
                                    <option value=" Bureau of Transportation Statistics"></option>
                                    <option value=" Capitol Police"></option>
                                    <option value=" Capitol Visitor Center"></option>
                                    <option value=" Career, Technical, and Adult Education, Office of"></option>
                                    <option value=" Census Bureau"></option>
                                    <option value=" Center for Food Safety and Applied Nutrition"></option>
                                    <option value="Center for Nutrition Policy and Promotion (CNPP)"></option>
                                    <option value=" Center for Parent Information and Resources (CPIR)"></option>
                                    <option value=" Centers for Disease Control and Prevention (CDC)"></option>
                                    <option value="Centers for Medicare and Medicaid Services (CMS)"></option>
                                    <option value=" Central Command (CENTCOM)"></option>
                                    <option value=" Central Intelligence Agency (CIA)"></option>
                                    <option value=" Chemical Safety Board"></option>
                                    <option value=" Chief Acquisition Officers Council"></option>
                                    <option value=" Chief Financial Officers Council"></option>
                                    <option value=" Chief Human Capital Officers Council"></option>
                                    <option value=" Chief Information Officers Council"></option>
                                    <option value=" Child Support Enforcement, Office of (OCSE)"></option>
                                    <option value=" Circuit Courts of Appeal"></option>
                                    <option value=" Citizens' Stamp Advisory Committee"></option>
                                    <option value=" Citizenship and Immigration Services (USCIS)"></option>
                                    <option value=" Civil Rights Division, Department of Justice"></option>
                                    <option value=" Civil Rights, Department of Education Office of"></option>
                                    <option value=" Civil Rights, Department of Health and Human Services Office for"></option>
                                    <option value=" Coast Guard"></option>
                                    <option value=" College of Information and Cyberspace"></option>
                                    <option value=" Commerce Department (DOC)"></option>
                                    <option value=" Commission of Fine Arts"></option>
                                    <option value=" Commission on Civil Rights"></option>
                                    <option value=" Commission on International Religious Freedom"></option>
                                    <option value=" Commission on Presidential Scholars"></option>
                                    <option value=" Commission on Security and Cooperation in Europe (Helsinki Commission)"></option>
                                    <option value=" Committee for the Implementation of Textile Agreements"></option>
                                    <option value=" Committee on Foreign Investment in the United States"></option>
                                    <option value=" Commodity Futures Trading Commission (CFTC)"></option>
                                    <option value=" Community Oriented Policing Services (COPS)"></option>
                                    <option value=" Community Planning and Development"></option>
                                    <option value=" Compliance, Office of"></option>
                                    <option value=" Comptroller of the Currency, Office of (OCC)"></option>
                                    <option value=" Computer Emergency Readiness Team (US CERT)"></option>
                                    <option value=" Congress—U.S. House of Representatives"></option>
                                    <option value=" Congress—U.S. Senate"></option>
                                    <option value=" Congressional Budget Office (CBO)"></option>
                                    <option value=" Congressional Research Service"></option>
                                    <option value=" Consular Affairs, Bureau of"></option>
                                    <option value=" Consumer Financial Protection Bureau"></option>
                                    <option value=" Consumer Product Safety Commission (CPSC)"></option>
                                    <option value=" Coordinating Council on Juvenile Justice and Delinquency Prevention"></option>
                                    <option value=" Copyright Office"></option>
                                    <option value=" Corps of Engineers"></option>
                                    <option value=" Council of Economic Advisers"></option>
                                    <option value=" Council of the Inspectors General on Integrity and Efficiency"></option>
                                    <option value=" Council on Environmental Quality"></option>
                                    <option value=" Court of Appeals for the Armed Forces"></option>
                                    <option value=" Court of Appeals for the Federal Circuit"></option>
                                    <option value=" Court of Appeals for Veterans Claims"></option>
                                    <option value=" Court of Federal Claims"></option>
                                    <option value=" Court of International Trade"></option>
                                    <option value=" Court Services and Offender Supervision Agency for the District of Columbia"></option>
                                    <option value=" Customs and Border Protection"></option>
                                    <option value=" Cyber Command"></option>
                                    <option value=" Cybersecurity and Infrastructure Security Agency (CISA)"></option>
                                    <option value=" Debt and Claims Management Center"></option>
                                    <option value=" Defense Acquisition University"></option>
                                    <option value=" Defense Advanced Research Projects Agency (DARPA)"></option>
                                    <option value=" Defense Commissary Agency"></option>
                                    <option value=" Defense Contract Audit Agency"></option>
                                    <option value=" Defense Contract Management Agency"></option>
                                    <option value=" Defense Counterintelligence and Security Agency"></option>
                                    <option value=" Defense Department (DOD)"></option>
                                    <option value=" Defense Finance and Accounting Service (DFAS)"></option>
                                    <option value=" Defense Finance and Accounting Service Debt and Claims Management Center"></option>
                                    <option value=" Defense Health Agency"></option>
                                    <option value=" Defense Information Systems Agency (DISA)"></option>
                                    <option value=" Defense Intelligence Agency (DIA)"></option>
                                    <option value=" Defense Logistics Agency (DLA)"></option>
                                    <option value=" Defense Nuclear Facilities Safety Board"></option>
                                    <option value=" Defense Security Cooperation Agency (DSCA)"></option>
                                    <option value=" Defense Technical Information Center (DTIC)"></option>
                                    <option value=" Defense Threat Reduction Agency (DTRA)"></option>
                                    <option value=" Delaware River Basin Commission"></option>
                                    <option value=" Delta Regional Authority"></option>
                                    <option value="Denali Commission"></option>
                                    <option value=" Department of Agriculture (USDA)"></option>
                                    <option value=" Department of Commerce (DOC)"></option>
                                    <option value=" Department of Defense (DOD)"></option>
                                    <option value=" Department of Education (ED)"></option>
                                    <option value=" Department of Energy (DOE)"></option>
                                    <option value=" Department of Health and Human Services (HHS)"></option>
                                    <option value=" Department of Homeland Security (DHS)"></option>
                                    <option value=" Department of Housing and Urban Development (HUD)"></option>
                                    <option value=" Department of Justice (DOJ)"></option>
                                    <option value=" Department of Labor (DOL)"></option>
                                    <option value=" Department of State (DOS)"></option>
                                    <option value=" Department of the Interior (DOI)"></option>
                                    <option value=" Department of the Treasury"></option>
                                    <option value=" Department of Transportation (DOT)"></option>
                                    <option value=" Department of Veterans Affairs (VA)"></option>
                                    <option value=" Director of National Intelligence, Office of"></option>
                                    <option value=" Disability Employment Policy, Office of (ODEP)"></option>
                                    <option value=" Drug Enforcement Administration (DEA)"></option>
                                    <option value=" Dwight D. Eisenhower School for National Security and Resource Strategy"></option>
                                    <option value=" Economic Analysis, Bureau of (BEA)"></option>
                                    <option value="Economic Development Administration (EDA)"></option>
                                    <option value="Economic Growth, Energy, and the Environment"></option>
                                    <option value="Economic Research Service"></option>
                                    <option value="Education Department (ED)"></option>
                                    <option value="Elder Justice Initiative"></option>
                                    <option value="Election Assistance Commission (EAC)"></option>
                                    <option value="Elementary and Secondary Education, Office of"></option>
                                    <option value="Employee Benefits Security Administration (EBSA)"></option>
                                    <option value="Employment and Training Administration"></option>
                                    <option value="Endangered Species Program"></option>
                                    <option value="Energy Department (DOE)"></option>
                                    <option value="Energy Information Administration"></option>
                                    <option value="Energy Star Program"></option>
                                    <option value="English Language Acquisition Office"></option>
                                    <option value="Engraving and Printing, Bureau of (BEP)"></option>
                                    <option value="Environmental Management, Office of"></option>
                                    <option value="Environmental Protection Agency (EPA)"></option>
                                    <option value="Equal Employment Opportunity Commission (EEOC)"></option>
                                    <option value="European Command"></option>
                                    <option value="Executive Office for Immigration Review"></option>
                                    <option value="Export-Import Bank of the United States"></option>
                                    <option value="Fair Housing and Equal Opportunity (FHEO)"></option>
                                    <option value="Fannie Mae"></option>
                                    <option value="Farm Credit Administration"></option>
                                    <option value="Farm Credit System Insurance Corporation"></option>
                                    <option value="Farm Service Agency"></option>
                                    <option value="Federal Accounting Standards Advisory Board"></option>
                                    <option value="Federal Aviation Administration (FAA)"></option>
                                    <option value="Federal Bureau of Investigation (FBI)"></option>
                                    <option value="Federal Bureau of Prisons (BOP)"></option>
                                    <option value="Federal Citizen Information Center"></option>
                                    <option value="Federal Communications Commission (FCC)"></option>
                                    <option value="Federal Consulting Group"></option>
                                    <option value="Federal Court Interpreters"></option>
                                    <option value="Federal Deposit Insurance Corporation (FDIC)"></option>
                                    <option value="Federal Election Commission"></option>
                                    <option value="Federal Emergency Management Agency (FEMA)"></option>
                                    <option value="Federal Energy Regulatory Commission"></option>
                                    <option value="Federal Executive Boards"></option>
                                    <option value="Federal Financial Institutions Examination Council"></option>
                                    <option value="Federal Financing Bank"></option>
                                    <option value="Federal Geographic Data Committee"></option>
                                    <option value="Federal Highway Administration (FHA)"></option>
                                    <option value="Federal Home Loan Mortgage Corporation (Freddie Mac)"></option>
                                    <option value="Federal Housing Administration (FHA)"></option>
                                    <option value="Federal Housing Finance Agency"></option>
                                    <option value="Federal Interagency Committee on Education"></option>
                                    <option value="Federal Interagency Council on Statistical Policy"></option>
                                    <option value="Federal Judicial Center"></option>
                                    <option value="Federal Labor Relations Authority (FLRA)"></option>
                                    <option value="Federal Laboratory Consortium for Technology Transfer"></option>
                                    <option value="Federal Law Enforcement Training Center (FLETC)"></option>
                                    <option value="Federal Library and Information Center Committee"></option>
                                    <option value="Federal Maritime Commission"></option>
                                    <option value="Federal Mediation and Conciliation Service"></option>
                                    <option value="Federal Mine Safety and Health Review Commission"></option>
                                    <option value="Federal Motor Carrier Safety Administration (FMCSA)"></option>
                                    <option value="Federal National Mortgage Association (Fannie Mae)"></option>
                                    <option value="Federal Protective Service"></option>
                                    <option value="Federal Railroad Administration (FRA)"></option>
                                    <option value="Federal Register"></option>
                                    <option value="Federal Reserve System"></option>
                                    <option value="Federal Retirement Thrift Investment Board"></option>
                                    <option value="Federal Student Aid Information Center"></option>
                                    <option value="Federal Trade Commission (FTC)"></option>
                                    <option value="Federal Transit Administration (FTA)"></option>
                                    <option value="Federal Voting Assistance Program"></option>
                                    <option value="FedStats"></option>
                                    <option value="Fire Administration (USFA)"></option>
                                    <option value="Fiscal Service, Bureau of the"></option>
                                    <option value="Fish and Wildlife Service (FWS)"></option>
                                    <option value="Fleet Forces Command"></option>
                                    <option value="Food and Agriculture, National Institute of (NIFA)"></option>
                                    <option value="Food and Drug Administration (FDA)"></option>
                                    <option value="Food and Nutrition Service"></option>
                                    <option value="Food Safety and Inspection Service"></option>
                                    <option value="Foreign Agricultural Service"></option>
                                    <option value="Foreign Claims Settlement Commission"></option>
                                    <option value="Forest Service"></option>
                                    <option value="Fossil Energy"></option>
                                    <option value="Freddie Mac">"&gt;</option>
                                    <option value="Fulbright Foreign Scholarship Board"></option>
                                    <option value="General Services Administration (GSA)"></option>
                                    <option value="Geological Survey (USGS)"></option>
                                    <option value="Ginnie Mae"></option>
                                    <option value="Global Media, Agency for"></option>
                                    <option value="Government Accountability Office (GAO)"></option>
                                    <option value="Government Ethics, Office of (OGE)"></option>
                                    <option value="Government National Mortgage Association (Ginnie Mae)"></option>
                                    <option value="Government Publishing Office (GPO)"></option>
                                    <option value="Grain Inspection, Packers and Stockyards Administration"></option>
                                    <option value="Harry S. Truman Scholarship Foundation "></option>
                                    <option value="Health and Human Services Department (HHS)"></option>
                                    <option value="Health Resources and Services Administration"></option>
                                    <option value="Helsinki Commission"></option>
                                    <option value="Holocaust Memorial Museum"></option>
                                    <option value="Homeland Security Department (DHS)"></option>
                                    <option value="Hour and Wage Division (WHD)"></option>
                                    <option value="House of Representatives"></option>
                                    <option value="House Office of Inspector General"></option>
                                    <option value="House Office of the Clerk"></option>
                                    <option value="Housing and Urban Development, Department of (HUD)"></option>
                                    <option value="Housing Office"></option>
                                    <option value="Immigrant and Employee Rights Section (IER)"></option>
                                    <option value="Immigration and Citizenship Services (USCIS)"></option>
                                    <option value="Immigration and Customs Enforcement (ICE)"></option>
                                    <option value="Indian Affairs"></option>
                                    <option value="Indian Arts and Crafts Board"></option>
                                    <option value="Indian Health Service"></option>
                                    <option value="Indo-Pacific Command"></option>
                                    <option value="Indoor Air Quality (IAQ)"></option>
                                    <option value="Industrial College of the Armed Forces"></option>
                                    <option value="Industry and Security, Bureau of (BIS)"></option>
                                    <option value="Inspectors General"></option>
                                    <option value="Institute of Education Sciences"></option>
                                    <option value="Institute of Museum and Library Services"></option>
                                    <option value="Institute of Peace"></option>
                                    <option value="Inter-American Foundation"></option>
                                    <option value="Interagency Alternative Dispute Resolution Working Group"></option>
                                    <option value="Interagency Committee for the Management of Noxious and Exotic Weeds"></option>
                                    <option value="Interagency Council on Homelessness"></option>
                                    <option value="Interior Department (DOI)"></option>
                                    <option value="Internal Revenue Service (IRS)"></option>
                                    <option value="International Development Finance Corporation (DFC)"></option>
                                    <option value="International Labor Affairs, Bureau of"></option>
                                    <option value="International Trade Administration (ITA)"></option>
                                    <option value="International Trade Commission"></option>
                                    <option value="Interpol"></option>
                                    <option value="James Madison Memorial Fellowship Foundation"></option>
                                    <option value="Japan-United States Friendship Commission"></option>

                                    <option value=" job corps <option joint board htmlFor the enrollment of actuaries congressional committee on inaugural ceremonies forces staff college program executive office chemical and biological defense judicial panel multidistrict litigation justice programs, juvenile delinquency prevention, labor department (dol) land management, bureau (blm) library congress (loc) marine maritime administration (marad) marshals service mediation conciliation medicaid chip payment access commission medicare advisory middle east broadcasting networks military postal agency mine safety health (msha) minority health, missile (mda) morris k. udall stewart l. foundation national aeronautics space (nasa) archives records (nara) capital planning center complementary integrative (nccih) council disability university endowment arts (nea) flood insurance (nfip) geospatial-intelligence information (nhic) highway traffic (nhtsa) institute arthritis, musculoskeletal skin diseases deafness other communication disorders (nidcd) food agriculture (nifa) mental (nimh) occupational (niosh) institutes (nih) interagency fire laboratories medicine ocean park passport (npic) prevention network reconnaissance security (nsa) technical transportation (ntsb) weather natural resources revenue, noaa fisheries northern command northwest power nuclear regulatory (nrc) oak ridge laboratory review civil rights, education career, technical, adult community development cuba economic adjustment environmental management fossil energy housing investor advocacy budget (omb) revenue personnel (opm) postsecondary science technology policy servicemember affairs special rehabilitative services (osers) assistant secretary research director intelligence pardon attorney open world leadership pacific electric conservation parent (cpir) peace pentagon force protection inspection (usps) administrations presidential scholars pretrial district columbia prisoner war missing in action accounting public indian radio tv martí free europe liberty (rfe rl) railroad retirement (rrb) refugee resettlement, risk rural utilities saint lawrence seaway corporation seafood securities exchange (sec) senate affairs, smithsonian institution social southern services, state (dos) stennis substance abuse (samhsa) surface mining, reclamation enforcement, susquehanna river basin taxpayer trade (dot) statistics, trustee u.s. global media air arctic army engineers capitol police census coast guard international religious freedom court appeals veterans claims customs border (usda) (dod) (doe) homeland (dhs) (doj) treasury (va) european fleet house representatives indo-pacific mint central - interpol parole operations unified combatant commands us-cert (us cert) day veterans' employment training (vets) voice america (voa) washington headquarters weights measures division western area wireless telecommunications bureau"></option>
                                    <option value="Women's Bureau"></option>
                                    <option value="Woodrow Wilson International Center for Scholars"></option>
                                  </datalist>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="col-md-12">
                                  <label className="control-label">Do You Have Budgeting / Procurement Authority? </label>
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
                                  <label className="text-left">If Yes, then what is Your Approximate Amount of Budgeting Authority?</label>
                                  <select className="form-control" name="password" required autofocus>
                                    <option> $0 – $500,000 </option>
                                    <option> $500,000 - $1,000,000 </option>
                                    <option> $1,000,000 - $10,000,000 </option>
                                    <option> $10,000,000 – $50,000,000; </option>
                                    <option> $50,000,000 - $100,000,000</option>
                                    <option> $100,000,000 - $500,000,000</option>
                                    <option> $500,000,000 - $1,000,000,000</option>
                                    <option> $1,000,000,000&gt;</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="col-md-12">
                                  <label className="control-label">Describe in Detail How Ginicoe Can Help You</label>
                                  <textarea className="form-control" defaultValue={""} />
                                </div>
                              </div>
                              {/* <div class="form-group">

                                            <button type="submit" class="btn btn-primary form-button" name="form-button">

                                                Login

                                            </button>

                                        </div> 

                                        <!-- </div> */}
                              {/* </div> */}
                              {/* <p class="link-bottom">Not a member yet? <a href="register.html">Register now</a></p>

                                */}
                              <div className="form-group">
                                <div className="col-md-12">
                                  <label className=" control-label"> What is your work email address? </label>
                                  <input type="text" className="form-control" name="zip" defaultValue placeholder="Email Address" onkeypress="return restrictAlphabets(event)" required autoFocus />
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
                              </div>
                            </div>
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
