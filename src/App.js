import Graph from "./Components/Graph.js"
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react"
import Papa from "papaparse"
// import header from "papaparse"

function App() {
  const [AAPLData, setAAPLData] = useState([])
  const [AMZNData, setAMZNData] = useState([])
  const [FBData, setFBData] = useState([])
  const [GOOGData, setGOOGData] = useState([])
  const [GSPCData, setGSPCData] = useState([])
  const [NFLXData, setNFLXData] = useState([])



  // let AAPL = axios.get("/data/AAPL.csv")
  //   .then((response) => {
  //     let data=response.data
  //     let parsedData=Papa.parse(data, {header:true})
  //     console.log(parsedData.data);
  //     setAAPLData(parsedData.data)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  // })

  function processData(data){
    let preData=data.data
    let parsedData=Papa.parse(preData, {header:true, delimiter:","})
    console.log(parsedData.data)
    return parsedData.data
  }


 
  axios.all([
    axios.get("/data/AAPL.csv"),
    axios.get("/data/AMZN.csv"),
    axios.get("/data/FB.csv"),
    axios.get("/data/GOOG.csv"),
    axios.get("/data/GSPC.csv"),
    axios.get("/data/NFLX.csv")
  ])
    .then(axios.spread((...responses) => {
      responses.map(r=>processData(r))
      setAAPLData(responses[0])
      setAMZNData(responses[1])
      setFBData(responses[2])
      setGOOGData(responses[3])
      setGSPCData(responses[4])
      setNFLXData(responses[5])
    }))



  return (
    <div className="App">
      <Graph/>
    </div>
  );
}

export default App;
