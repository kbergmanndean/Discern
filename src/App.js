import Graph from "./Components/Graph.js"
import './App.css';
import axios from "axios";
import {useState} from "react"
import Papa from "papaparse"
// import header from "papaparse"

function App() {
  const [AAPLData, setAAPLData] = useState([])

  axios.get("/data/AAPL.csv")
    .then((response) => {
      let data=response.data
      let parsedData=Papa.parse(data, {header:true})
      console.log(parsedData.data);
      setAAPLData(parsedData.data)
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
