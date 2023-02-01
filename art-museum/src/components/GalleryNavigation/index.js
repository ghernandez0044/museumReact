import { NavLink } from 'react-router-dom'
import './GalleryNavigation.css'

function GalleryNavigation({ galleries }){

    console.log('Galleries: ', galleries)

    return (
        <nav>
        <h1>Galleries</h1>
                <NavLink to="/">
                    Home
                </NavLink>
                <ul>
                {
                    galleries.map(gallery => (
                        <NavLink to={`/galleries/${gallery.id}`}>
                            <li key={gallery.id}>
                            {gallery.name}
                            </li>
                        </NavLink>
                    ))
                }
                </ul>
        </nav>
        )
}



export default GalleryNavigation