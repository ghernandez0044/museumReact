import { Route, Switch } from 'react-router-dom'
import harvardArt from "./data/harvardArt.js"
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";

function App() {
  return (
    <div className="page-wrapper">
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
      <Switch>
        <Route exact path="/">
          <GalleryNavigation galleries={harvardArt.records}/>
        </Route>
        <Route exact path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
