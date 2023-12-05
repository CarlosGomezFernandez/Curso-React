import { useEffect, useState } from "react";

export function App() {

    const [fact, setFact] = useState('Hola que tal')

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
        .then(response => response.json())
    }, [])

    return (
        <main>
            <h1>App de gatitos</h1>
            <p>{fact}</p>
        </main>
    )
}