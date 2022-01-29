import { DatasetController } from 'chart.js';
import { Line } from 'react-chartjs-2';

function Graph({AAPLData, AMZNData, FBData, GOOGData, GSPCData, NFLXData}) {

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
        label:"GSPC",
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
    
    
    let linesArray =[AAPLLine, AMZNLine, FBLine, GOOGLine, GSPCLine, NFLXLine]

    let data={
        labels:dates,
        datasets:linesArray
    }
    return(
        <Line data={data}/>
    )
}
export default Graph