import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [fours, setFours] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const newSingle = runs + 1;
        setRuns(newSingle);
    }

    const handleFour = () => {
        const newFour = runs + 4;
        const newFours = fours + 1;
        setRuns(newFour);
        setFours(newFours);
    }

    const handleSix = () => {
        const newSix = runs + 6;
        const newSixes = sixes + 1;
        setRuns(newSix);
        setSixes(newSixes);
    }

    const batsmanStyle = {
        border: '2px solid red',
        marginTop: '5px'
    }
    return(
        <div style={batsmanStyle}>
            {
                runs >= 50 && <p>Congratulations! You Scored 50.</p>
            }
            <h3>Batsman</h3>
            <p>Total Score: {runs}</p>
            <p>Total Fours: {fours}</p>
            <p>Total Sixes: {sixes}</p>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}