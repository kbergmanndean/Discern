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
    
    
    let linesArray =[AAPLLine,AMZNLine]

    let data={
        labels:dates,
        datasets:linesArray
    }
    return(
        <Line data={data}/>
    )
}
export default Graph