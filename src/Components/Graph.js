import { DatasetController } from 'chart.js';
import { Line } from 'react-chartjs-2';

function Graph({AAPLData, AMZNData}) {

    let dates=AAPLData.map(obj=>{return(obj["Date"])})

    function closeData(obj) {
        return obj["Close"]
    }

    let AAPLCloses=AAPLData.map(closeData)
    let AMZNCloses=AMZNData.map(closeData)
    let AAPLLine={
        label:"AAPL", 
        backgroundColor:"red", 
        borderColor:"red", 
        data:AAPLCloses
    }
    let AMZNLine={
        label:"AMZN",
        backgroundColor:"yellow",
        borderColor:"yellow",
        data:AMZNCloses
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