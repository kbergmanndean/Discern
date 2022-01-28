import { DatasetController } from 'chart.js';
import { Line } from 'react-chartjs-2';

function Graph({AAPLData}) {
    const [dates, setDates] = ([])

    let labelsArray=[]
    // let labels=AAPLData.map(obj=>obj["Date"].push(labelsArray))
    let labels=AAPLData.map(obj=>labelsArray.push(obj["Date"]))


    return(
        <Line data={{
            labels:labels
    
        } }/>
    )
}
export default Graph