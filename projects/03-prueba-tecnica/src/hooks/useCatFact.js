import { useState, useEffect } from 'react'
import { getRandomFact } from "../services/facts"

export function useCatFact() {

    const [fact, setFact] = useState()
    // Recuperar la cita al cargar la página

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}