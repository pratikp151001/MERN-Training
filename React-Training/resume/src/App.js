import logo from "./logo.svg";
import "./App.css";
import pic from "./PIC.jpg";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      </nav>
      <div className="mainbody container-fluid mt-5">
        <div className="row ">
          <div className="col-5 text-center">
            <img className="Picture" src={pic} alt="Profile Image HERE"></img>
          </div>
          <div className="col-7 ">
            <div className="info ms-5 mt-5">
              <p className="name">Pratik Patel</p>
              <p className="degisnation">Trainee Software Developer</p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique numquam cumque laborum. Quae, labore tempora cumque
                eius odio aliquid accusamus fugiat suscipit, iste inventore
                itaque iusto culpa incidunt blanditiis sequi ullam
                exercitationem architecto veniam libero dolores at commodi modi
                quibusdam? Culpa a laboriosam quos accusamus, natus totam
                commodi asperiores non?
              </p>
              <button className="btn buttons me-3">About</button>
              <button className="btn buttons me-3">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
