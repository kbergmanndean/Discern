import { DatasetController } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useState } from "react"

function Graph({AAPLData, AMZNData, FBData, GOOGData, GSPCData, NFLXData}) {
    const [showComparison, setShowComparison] = useState(false)
    const [lineFiltered, setLineFiltered] = useState([])

    let dates=AAPLData.map(obj=>{return(obj["Date"])})

    let allData=[AAPLData, AMZNData, FBData, GOOGData, GSPCData, NFLXData]

    let closeData=allData.map((data)=>{return data.map((obj)=>{return obj["Close"]})})

    let AAPLLine={
        label:"AAPL", 
        backgroundColor:"#ff595e", 
        borderColor:"#ff595e",
        pointRadius:"2",
        data:closeData[0]
    }
    let AMZNLine={
        label:"AMZN",
        backgroundColor:"#ffca3a",
        borderColor:"#ffca3a",
        pointRadius:"2",
        data:closeData[1]
    }
    let FBLine={
        label:"FB",
        backgroundColor:"#8ac926",
        borderColor:"#8ac926",
        pointRadius:"2",
        data:closeData[2]
    }
    let GOOGLine={
        label:"GOOG",
        backgroundColor:"#1982c4",
        borderColor:"#1982c4",
        pointRadius:"2",
        data:closeData[3]
    }
    let GSPCLine={
        label:"^GSPC",
        backgroundColor:"black",
        borderColor:"black",
        pointRadius:"2",
        data:closeData[4]
    }
    let NFLXLine={
        label:"NFLX",
        backgroundColor:"#6a4c93",
        borderColor:"#6a4c93",
        pointRadius:"2",
        data:closeData[5]
    }
    
    let linesArray = [AAPLLine, AMZNLine, FBLine, GOOGLine, GSPCLine, NFLXLine]
    
    let data={
        labels:dates,
        datasets:lineFiltered.length!=0 ? [lineFiltered, GSPCLine] : linesArray
    }

    let options={
        responsive:true, 
        plugins:{
            legend:{
                position:"top",
            },
            title:{
                display:true
                // text:"Stock Prices & S&P 500 Index Value"
            }
        }
    }

    const filterLines = (line) => {lineFiltered.label != line.label ? setLineFiltered(line) : setLineFiltered([])}

    return(
        <div>
            <div id="head">
            <h1>Stock Prices and S&P 500 Index Value</h1>
            <button id="compare" onClick={()=>setShowComparison(!showComparison)}>Comparison</button>
            {showComparison?
            <div>
                <button onClick={()=>filterLines(AAPLLine)}>AAPL</button>
                <button onClick={()=>filterLines(AMZNLine)}>AMZN</button>
                <button onClick={()=>filterLines(FBLine)}>FB</button>
                <button onClick={()=>filterLines(GOOGLine)}>GOOG</button>
                <button onClick={()=>filterLines(NFLXLine)}>NFLX</button>
            </div>
            :null}
            </div>
            <Line data={data} options={options}/>
        </div>
    )
}
export default Graph