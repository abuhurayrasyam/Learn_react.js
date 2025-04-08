// export default function Task({task, isDone, duration}){
//     if(isDone){
//         return(
//             <li>Completed Task: {task} and Duration: {duration}</li>
//         )
//     }
//     else{
//         return(
//             <li>Pending Task: {task} and Duration: {duration}</li>
//         )
//     }
// }

// export default function Task({task, isDone, duration}){
//     return isDone ? <li>Completed Task: {task} and Duration: {duration}</li> : <li>Pending Task: {task} and Duration: {duration}</li>
// }

// export default function Task({task, isDone, duration}){
//     return !isDone && <li>Completed Task: {task} and Duration: {duration}</li>
// }

// export default function Task({task, isDone, duration}){
//     return !isDone && <li>Completed Task: {task} and Duration: {duration}</li>
// }

export default function Task({task, isDone, duration}){
    let myTask ;
    const displayTime = duration ? duration : 100;
    if(isDone){
        return(
            myTask = <li>Completed Task: {task} and Duration: {displayTime ? 'I am Done' : 'I am not Done'}</li>
        )
    }
    else{
        return(
            myTask = <li>Pending Task: {task} and Duration: {!displayTime ? 'I am Done' : 'I am not Done'}</li>
        )
    }
}