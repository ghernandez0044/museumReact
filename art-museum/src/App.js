import { Route } from 'react-router-dom'
import harvardArt from "./data/harvardArt.js"
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";

function App() {
  return (
    <div className="page-wrapper">
    <GalleryNavigation galleries={harvardArt.records}/>
    <Route exact path="/galleries/:galleryId">
      <GalleryView gallerries={harvardArt.records} />
    </Route>
    </div>
  );
}

export default App;
