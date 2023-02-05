import { useParams, NavLink } from 'react-router-dom'

function GalleryView({ galleries }){

    const { galleryId } = useParams()

    console.log('galleryId: ', galleryId)
    console.log('galleries: ', galleries)

    const gallery = galleries.find(gallery => gallery.gallerynumber === galleryId.toString())

    console.log('gallery: ', gallery)

    console.log('Artworks: ', gallery.objects)

    return (
        <div>
            <h1>Hello from GalleryView</h1>
            <h2>Gallery: {gallery.name}</h2>
            <h3>Theme: {gallery.theme}</h3>
            <ul>
                {gallery.objects.map(artwork => (
                    <NavLink to={`/galleries/${galleryId}/${artwork.id}`}>
                        <li key={artwork.id}>
                        <h4>{artwork.title}</h4>
                        </li>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default GalleryView