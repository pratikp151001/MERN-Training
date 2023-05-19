import logo from "./logo.svg";
import "./App.css";
import pic from "./PIC.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand ps-5" href="#">
                Resume
              </a>
            </div>
          </div>
        </nav> */}
        <h1 className="text-center">Resume</h1>
        <div className="mainbody pt-5">
          <div className="row">
            <div className="col-5 text-center">
              <img
                className="Picture img-fluid"
                src={pic}
                alt="Profile Image HERE"
              ></img>
            </div>
            <div className="col-7 ">
              <div className="info ms-5">
                <p className="name">Pratik Patel</p>
                <p className="degisnation">Trainee Software Developer</p>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique numquam cumque laborum. Quae, labore tempora cumque
                  eius odio aliquid accusamus fugiat suscipit, iste inventore
                  itaque iusto culpa incidunt blanditiis sequi ullam
                  exercitationem architecto veniam libero dolores at commodi
                  modi quibusdam? Culpa a laboriosam quos accusamus, natus totam
                  commodi asperiores non?
                </p>
                {/* <button className="btn buttons me-3">About</button>
                <button className="btn buttons me-3">Contact</button> */}
              </div>
            </div>
          </div>
        </div>
        {/* <hr></hr>
      <pre className="ms-3">Eduction</pre>
      <div className="row row-cols-3 text-center mt-4">
        <div className="col text-center">
          <div className="card text-center" >
            <img src={pic} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <div className="card text-center" >
            <img src={pic} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <div className="card text-center" >
            <img src={pic} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div> */}

        <div className="ButtomPart">
          <div className="row">
           
            <div className="col-5  ButtomPartleftSidePart pt-5 pe-5">
              <div className="aDDreSS">
              <div className="add">
              <i className="bi bi-geo-alt-fill"></i>
                <p className="address">Surat</p>
              </div>
              <div className="add">
              <i className="bi bi-envelope-at-fill"></i>
                <p className="address">abc@gmail.com</p>
              </div>
              <div className="add">
              <i className="bi bi-telephone"></i>
                <p className="address">5625364875</p>
              </div>
              <div className="add">
              <i className="bi bi-browser-chrome"></i>
                <p className="address">www.abc.com</p>
              </div>
              </div>
              <div className="eductions">
                <div className="heading">
                  <h2 className="Eductions ms-5"> Eduction </h2>
                </div>
                <div className="EductTIONS">
                <p className="eduPlace">School Name</p>
                <p className="eduYears">2014-2019</p>
                <p className="eduPlace">Univercity</p>
                <p className="eduYears">2014-2019</p>
                <p className="eduPlace">Professional Degree</p>
                <p className="eduYears">2014-2019</p>
                </div>
              </div>
              <div className="Skill">
                <div className="heading">
                  <h2 className="Skills ms-5"> Skills </h2>
                </div>
                <div className="skillist">
                  <ul>
                    <li>ABC</li>
                    <li>DEF</li>
                    <li>PQR</li>
                    <li>XYZ</li>
                    <li>STU</li>
                    <li>ABC</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-7 ">
              <div className="WORK ms-5">
                <div className="headingrightsite ps-2">
                  <h2 className="Work  mt-5"> Work </h2>
                </div>
                <p className="mb-0">SOFTWARE DEVELOPER</p>
                <p className="companyNAme grayColor">Company name | date</p>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem obcaecati assumenda placeat facere animi
                  dolores molestias enim in, eligendi, voluptatibus maiores nisi
                  quae, aliquam sunt? Porro facilis laboriosam quos soluta?
                </p>
                <p className=" JobResponsibility grayColor">
                  Job Responsibility
                </p>
                <div className="jobrepos">
                  <ul>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                  </ul>
                </div>
                <hr></hr>
                <p className="mb-0">TRAINEE SOFTWARE DEVELOPER</p>
                <p className="companyNAme grayColor">Company name | date</p>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem obcaecati assumenda placeat facere animi
                  dolores molestias enim in, eligendi, voluptatibus maiores nisi
                  quae, aliquam sunt? Porro facilis laboriosam quos soluta?
                </p>
                <p className=" JobResponsibility grayColor">
                  Job Responsibility
                </p>
                <div className="jobrepos">
                  <ul>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                  </ul>
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
