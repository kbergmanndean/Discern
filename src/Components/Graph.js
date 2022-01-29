import { DatasetController } from 'chart.js';
import { Line } from 'react-chartjs-2';

function Graph({AAPLData}) {

    let dates=AAPLData.map(obj=>{return(obj["Date"])})

    let AAPLCloses=AAPLData.map(obj=>{return(obj["Close"])})
    let AAPLLine={label:"AAPL", backgroundColor:"red", borderColor:"red", data:AAPLCloses}

    

    let data={
        labels:dates,
        datasets:[AAPLLine]
    }
    return(
        <Line data={data}/>
    )
}
export default Graph