import './App.css'

import { useCatImage } from './hooks/useCatImage.js';
import { useCatFact } from './hooks/useCatFact.js';
import { Otro } from './components/Otro.jsx';

export function App() {

    // Custom hook
    const { fact, refreshFact } = useCatFact()

    // Custom hook
    const { imageUrl } = useCatImage({ fact })

    // Button Event handler
    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
                <button onClick={handleClick}>Get new fact</button>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word from ${imageUrl}`} />}
            </section>
        </main>
    );
}