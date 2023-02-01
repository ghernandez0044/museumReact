import harvardArt from "./data/harvardArt.js"
import GalleryNavigation from "./components/GalleryNavigation";


function App() {
  return (
    <GalleryNavigation galleries={harvardArt.records}/>
  );
}

export default App;
