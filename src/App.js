import Graph from "./Components/Graph.js"
import './App.css';
import axios from "axios";
import {useState} from "react"

function App() {
  const [AAPLdata, setAAPLData] = useState([])

  axios.get("/data/AAPL.csv")
    .then((response) => {
      setAAPLData(response.data)
      console.log(AAPLData)
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
