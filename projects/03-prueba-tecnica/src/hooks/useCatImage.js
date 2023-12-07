import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

// Custom hook
export function useCatImage({ fact }) {

    const [imageUrl, setImageUrl] = useState()

    // Recuperar la imagen al cambiar la cita
    useEffect(() => {
        if (!fact) return

        const imageUrl = fact.split(' ')[0]
        console.log(imageUrl)

        fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${imageUrl}?fontSize=50&fontColor=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })
    }, [fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}/cat/says/${imageUrl}` }
}