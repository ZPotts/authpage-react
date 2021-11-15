import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AuthForm from './AuthForm';

function App() {
  return (
    <div className="App">
      
  <div className="container-fluid" id="main-container">
    <div className="row">
      <div id="sidebar" className="col-3 border border-top-0 border-bottom-0 border-left-0">
        <div className="flex-shrink-0 p-3 bg-white sticky-top"classNa>
          <h5><span className="fs-5 fw-semibold">Auth Components</span></h5>
          <ul className="list-unstyled ps-0 mb-0">
            <li className="mb-1">
              <div className="sidebar-header align-items-center rounded">
                <a href="#name-auth" className="link-dark rounded">Name</a>
              </div>
              <ul className="sidebar-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#name-auth-yn" className="link-dark rounded">Y/N Name Auth</a></li>
              </ul>
            </li>
          </ul>
          <ul className="list-unstyled ps-0 mb-0">
            <li className="mb-1">
              <div className="sidebar-header align-items-center rounded">
                <a href="#zip-auth" className="link-dark rounded">Zip Code</a>
              </div>

              <ul className="sidebar-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#zip-ni" className="link-dark rounded">Numeric Input (5 digits)</a></li>
                <li><a href="#zip-ana" className="link-dark rounded">Advanced Numeric Auth</a></li>
                <li><a href="#zip-na" className="link-dark rounded">Numeric Auth</a></li>
              </ul>

            </li>
          </ul>
          <ul className="list-unstyled ps-0 mb-0">
            <li className="mb-1">
              <div className="sidebar-header align-items-center rounded">
                <a href="#yob-auth" className="link-dark rounded">Year of Birth</a>
              </div>
              <ul className="sidebar-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#yob-ni" className="link-dark rounded">Numeric Input (Year)</a></li>
                <li><a href="#yob-na" className="link-dark rounded">Numeric Auth</a></li>
                <li><a href="#yob-ana" className="link-dark rounded">Advanced Numeric Auth</a></li>
              </ul>
            </li>
          </ul>
          <ul className="list-unstyled ps-0 mb-0">
            <li className="mb-1">
              <div className="sidebar-header align-items-center rounded">
                <a href="#mmdd-auth" className="link-dark rounded">Month/Day of Birth</a>
              </div>
              <ul className="sidebar-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#mmdd-ni" className="link-dark rounded">Numeric Input (Month/Day)</a></li>
              </ul>
            </li>
          </ul>
          <ul className="list-unstyled ps-0 mb-0">
            <li className="mb-1">
              <div className="sidebar-header align-items-center rounded">
                <a href="#dob-auth" className="link-dark rounded">Full DOB (MM/DD/YYYY)</a>
              </div>
              <ul className="sidebar-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#dob-ni" className="link-dark rounded">DOB Auth</a></li>
                <li><a href="#dob-wa" className="link-dark rounded">Word Auth</a></li>
              </ul>
            </li>
          </ul>
          <ul className="list-unstyled ps-0 mb-0">
            <li className="mb-1">
              <div className="sidebar-header align-items-center rounded">
                <a href="#memnum-auth" className="link-dark rounded">Member Number</a>
              </div>
              <ul className="sidebar-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#memnum-ni" className="link-dark rounded">Numeric Input</a></li>
                <li><a href="#memnum-ana" className="link-dark rounded">Advanced Numeric Auth</a></li>
              </ul>
            </li>
          </ul>
          <ul className="list-unstyled ps-0 mb-0">
            <li className="mb-1">
              <div className="sidebar-header align-items-center rounded">
                <a href="#codeword-auth" className="link-dark rounded">Code Word</a>
              </div>
              <ul className="sidebar-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#codeword-wa" className="link-dark rounded">Word Auth</a></li>
                <li><a href="#codeword-awa" className="link-dark rounded">Advanced Word Auth</a></li>
              </ul>
            </li>
          </ul>
          <ul className="list-unstyled ps-0 mb-0">
            <li className="mb-1">
              <div className="sidebar-header align-items-center rounded">
                <a href="#mid-auth" className="link-dark rounded">Member ID</a>
              </div>
              <ul className="sidebar-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" className="link-dark rounded">Member ID</a></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>

     
      <div id="main" className="col p-5">

          <AuthForm />

        <div id="name-auth" className="type-of-auth p-2">
          <h2 className="ms-2"><i className="bi bi-person-check-fill"></i>
            NAME AUTH</h2>
        </div>
        <div id="name-auth-yn" className="authblock container p-2">
          <div className="row pt-0">
            <div className="col col-3 ps-4 pb-4">
              <img src="./img/authpill_yn.png" className="mb-2 mw-50 authpill"classNa />
              <p><strong>Y/N Auth - Name Authentication</strong></p>

              <p><em>Yes/No - Name Auth is the <strong>required, first step of authentication</strong> for any call that
                  uses auths.</em></p>
            </div>
            <div className="col col-9 border-start border-dark px-4 pt-0 pb-4">


              <h5><i className="bi-question-circle"classNa></i> When to use it</h5>
              <hr />


              <ul>
                <li><strong>Does the call require a single point of authentication?</strong><br /> Use Yes/No Name Auth.
                </li>
                <li><strong>Does the call require more than one point of authentication?</strong><br />
                  Start with Yes/No Name Auth.</li>
              </ul>

              <p>You will always use Yes/No - Name Auth, in any call that requires authentication.</p>

              <h5><i className="bi bi-plus-slash-minus"></i> Advantages and Limitations</h5>
              <hr />
              <p className="leader">Advantages/Options</p>
              <ul>
                <li>All dialogs must have a yes/no authentication after the header.</li>
              </ul>
              <p className="leader">Limitations</p>
              <ul>
                <li>None</li>
              </ul>

              <h5><i className="bi bi-exclamation-circle"></i> Requirements</h5>
              <hr />
              <table className="table table-striped table-bordered tech-table">
                <tr>
                  <td className="tech_col1">DD Items to include</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td className="tech_col1">Failure body needed?</td>
                  <td>No - Connects to URM when response is "No"
                  </td>
                </tr>
                <tr>
                  <td className="tech_col1">Input types</td>
                  <td>Spoken: "Yes","No"<br />
                    DTMF: 1 for Yes. 2 for No.
                  </td>
                </tr>
              </table>
              <h5><i className="bi bi-keyboard"></i> Script Sample</h5>
              <hr />
              <img src="./img/script-yn-name.png" className="w-100" />
            </div>
          </div>
        </div>

        <div id="zip-auth" className="type-of-auth p-2">
          <h2 className="ms-2"><i className="bi bi-mailbox2"></i>
            ZIP CODE AUTH</h2>
        </div>

        <div id="zip-ni" className="authblock container p-2">
          <div className="row pt-0">
            <div className="col col-3 ps-4 pb-4">
              <img src="./img/authpill_ni.png" className="mb-2 mw-50"classNa />
              <p><strong>Numeric Input<br />
                  - Zip Code</strong></p>
            </div>
            <div className="col col-9 border-start border-dark px-4 pt-0 pb-4">
              <h5><i className="bi-question-circle"classNa></i> When to use it</h5>
              <hr />
              <p><em>
                  summary</em></p>

              <ul>
                <li><strong>Criteria</strong><br /> descriptiong</li>

              </ul>

              <p><strong>So...</strong>...</p>

              <h5><i className="bi bi-plus-slash-minus"></i> Advantages and Limitations</h5>
              <hr />
              <p className="leader">Advantages/Options</p>
              <ul>
                <li>Adv</li>
              </ul>
              <p className="leader">Limitations</p>
              <ul>
                <li>Lim</li>
              </ul>

              <h5><i className="bi bi-exclamation-circle"></i> Requirements</h5>
              <hr />
              <table className="table table-striped table-bordered tech-table">
                <tr>
                  <td className="tech_col1">DD Items to include</td>
                  <td>MemberZip</td>
                </tr>
                <tr>
                  <td className="tech_col1">Failure body needed?</td>
                  <td>Yes
                  </td>
                </tr>
                <tr>
                  <td className="tech_col1">Input types</td>
                  <td>Spoken
                  </td>
                </tr>
              </table>
              <h5><i className="bi bi-keyboard"></i> Script Sample</h5>
              <hr />
              <img src="./img/script-.png" className="w-100" />
            </div>
          </div>
        </div>


      </div> 
    </div>
  </div>
    </div>
  );
}

export default App;
