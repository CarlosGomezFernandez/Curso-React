import { useCatImage } from '../hooks/useCatImage.js'

export function Otro() {
    // Custom hook
    const { imageUrl } = useCatImage({ fact: 'cat' })

    return (
        <>
            {imageUrl && <img src={imageUrl} />}
        </>
    )
}