import { useParams } from 'react-router-dom'

function GalleryView({ gallerries }){

    const { galleryId } = useParams()

    console.log('galleryId: ', galleryId)
    console.log('galleries: ', gallerries)

    const gallery = gallerries.find(gallery => gallery.gallerynumber === galleryId)

    console.log('gallery: ', gallery)

    return (
        <div>
            <h1>Hello from GalleryView</h1>
            <h2>{gallery.name}</h2>
        </div>
    )
}

export default GalleryView