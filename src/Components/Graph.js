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
        backgroundColor:"red", 
        borderColor:"red", 
        data:closeData[0]
    }
    let AMZNLine={
        label:"AMZN",
        backgroundColor:"yellow",
        borderColor:"yellow",
        data:closeData[1]
    }
    let FBLine={
        label:"FB",
        backgroundColor:"green",
        borderColor:"green",
        data:closeData[2]
    }
    let GOOGLine={
        label:"GOOG",
        backgroundColor:"blue",
        borderColor:"blue",
        data:closeData[3]
    }
    let GSPCLine={
        label:"^GSPC",
        backgroundColor:"purple",
        borderColor:"purple",
        data:closeData[4]
    }
    let NFLXLine={
        label:"NFLX",
        backgroundColor:"orange",
        borderColor:"orange",
        data:closeData[5]
    }
    
    let linesArray = [AAPLLine, AMZNLine, FBLine, GOOGLine, GSPCLine, NFLXLine]
    
    let data={
        labels:dates,
        datasets:lineFiltered.length!=0 ? [lineFiltered, GSPCLine] : linesArray
    }

    const filterLines = (line) => {lineFiltered.label != line.label ? setLineFiltered(line) : setLineFiltered([])}

    return(
        <div>
            <button onClick={()=>setShowComparison(!showComparison)}>Comparison</button>
            {showComparison?
            <div>
                <button onClick={()=>filterLines(AAPLLine)}>AAPL</button>
                <button onClick={()=>filterLines(AMZNLine)}>AMZN</button>
                <button onClick={()=>filterLines(FBLine)}>FB</button>
                <button onClick={()=>filterLines(GOOGLine)}>GOOG</button>
                <button onClick={()=>filterLines(NFLXLine)}>NFLX</button>
            </div>
            :null}
            <Line data={data}/>
        </div>
    )
}
export default Graph