import Graph from "./Components/Graph.js"
import './App.css';
import axios from "axios";
import {useState} from "react"

function App() {
  const [AAPLData, setAAPLData] = useState([])

  function processData(data) {
    let array = data.split("\n");
    let result = []
    let headers = array[0].split(", ")
    for (let i = 1; i < array.length-1;i++) {
      let obj = {}
      let str = array[i]
//       let s = ''
//       let flag = 0
//     for (let ch of str) {
//       if (ch === '"' && flag === 0) {
//         flag = 1
//       }
//       else if (ch === '"' && flag == 1) flag = 0
//       if (ch === ', ' && flag === 0) ch = '|'
//       if (ch !== '"') s += ch
//     }
//     let properties = s.split("|")
//     for (let j in headers) {
//       if (properties[j].includes(", ")) {
//        obj[headers[j]] = properties[j]
//           .split(", ").map(item => item.trim())
//       }
//       else obj[headers[j]] = properties[j]
//       result.push(obj)
//       let json = JSON.stringify(result)
//       console.log(json)
//     }
//   }
// }
    
  
      // let str = array[i].split(",")
      // for (let j = 0; j < headers.length; j++){
      //   obj[headers[j]] = str[j]
      // }
      // result.push(obj)
      // let json = JSON.stringify(result)
      // console.log(json)
    }
    
  }

  

  axios.get("/data/AAPL.csv")
    .then((response) => {
      // setAAPLData(response.data.toString().split("\r"))
      processData(response.data)
      
      
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
