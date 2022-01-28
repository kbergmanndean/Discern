import Graph from "./Components/Graph.js"
import './App.css';
import axios from "axios";
import {useState} from "react"
import $ from "jquery-csv";


function App() {
  const [AAPLData, setAAPLData] = useState([])

 


  axios.get("/data/AAPL.csv")
    .then((response) => {
      let data=response.data
      console.log(data.toString())
      // let parsedData=$.csv.toObjects(data);
      // console.log(data);
    })
    .catch((error) => {
      console.log(error)
  })








  return (
    <div className="App">
      <Graph/>
    </div>
  );
}

export default App;
