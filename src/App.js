import Graph from "./Components/Graph.js"
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react"
import Papa from "papaparse"


function App() {
  const [AAPLData, setAAPLData] = useState([])
  const [AMZNData, setAMZNData] = useState([])
  const [FBData, setFBData] = useState([])
  const [GOOGData, setGOOGData] = useState([])
  const [GSPCData, setGSPCData] = useState([])
  const [NFLXData, setNFLXData] = useState([])


  function processData(response) {
    let preData=response.data
    let parsedData=Papa.parse(preData, {header:true, delimiter:","})
    return parsedData.data
  }

  useEffect(async() => {
    const result = await axios.all([
      axios.get("/data/AAPL.csv"),
      axios.get("/data/AMZN.csv"),
      axios.get("/data/FB.csv"),
      axios.get("/data/GOOG.csv"),
      axios.get("/data/GSPC.csv"),
      axios.get("/data/NFLX.csv")
    ])
      .then(axios.spread((...result) => {
        let array =result.map(r=>processData(r))
        setAAPLData(array[0])
        setAMZNData(array[1])
        setFBData(array[2])
        setGOOGData(array[3])
        setGSPCData(array[4])
        setNFLXData(array[5])
        console.log(AAPLData)
      }))
  },[])


  return (
    <div className="App">
      <Graph 
        AAPLData={AAPLData}
        AMZNData={AMZNData}
        FBData={FBData}
        GOOGData={GOOGData}
        GSPCData={GSPCData}
        NFLXData={NFLXData}
      />
    </div>
  );
}

export default App;
