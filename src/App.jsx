import { useState } from 'react';
import SectionPlayer from './components/SectionPlayer';

function App() {
    const [race, setRace] = useState([1, 1]);
    const handleRace = () => {
        let position = Math.floor(Math.random() * 2);
        setRace((prev) => {
            const newRace = [...prev];
            newRace[position] = newRace[position] + 1;
            return newRace;
        });
    };
    const handleReset = () => {
        setRace([1, 1]);
    };
    return (
        <div className="App" style={{ margin: '30px 20px' }}>
            {race[0] > race[1] ? (
                <h1>Player 1 is winning</h1>
            ) : race[0] < race[1] ? (
                <h1>Player 2 is winning</h1>
            ) : (
                <h1>Same point</h1>
            )}
            {Array.from({ length: 2 }, (_, i) => (
                <SectionPlayer key={i} player={i + 1} race={race}></SectionPlayer>
            ))}
            <div style={{ marginTop: '20px' }}>
                <button onClick={handleRace} style={{ marginRight: '4px' }}>
                    Race
                </button>
                {race[0] === 1 && race[1] === 1 ? <></> : <button onClick={handleReset}>Reset</button>}
            </div>
        </div>
    );
}

export default App;
