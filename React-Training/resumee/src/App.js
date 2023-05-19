import logo from "./logo.svg";
import "./App.css";
import FullApp from "./components/FullApp";

function App() {
  const info={
    name:"Pratik Patel",
    email:"abc123@gmail.com",
    address:"Navsari",
    mobileNumber:"4857485444",
    website:"www.abcdef.com",
    degisnation:"Trainee Software Developer",
    schoolname10th:"AB school",
    schooling10thYears:"2015-2017",
    schoolname12th:"AB school",
    schooling12thYears:"2017-2019",
    univercityName:"GTU",
    uivercityYears:"2019-2023",
    skills:["A","B","C","D","E"],
    workExp:[
      {
      position:"SOFTWARE DEVELOPER",
      comapnyName:"ASD Infotech",
      Date:"12-04-2020",
      jobResponsibility:["A","Q","E","R","D"]
    },
    {
      position:"TRAINEE SOFTWARE DEVELOPER",
      comapnyName:"EDR Infotech",
      Date:"12-04-2020",
      jobResponsibility:["AF","QW","FG","DFR","DGG"]
    },
    {
      position:"TRAINEE SOFTWARE DEVELOPER",
      comapnyName:"EDR Infotech",
      Date:"12-04-2020",
      jobResponsibility:["AF","QW","FG","DFR","DGG"]
    },
    ]
    
  }
  return (
    <div className="App">
     <div className="container">
     <FullApp info={info}/>

     </div>
    </div>
  );
}

export default App;
