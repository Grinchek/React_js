import './App.css';
import FavBand from './components/favoriteBand/FavBand';
import Recipe from './components/recipe/Recipe';
import Shakespeare from './shakespeare/Shakespeare';
import FavMovie from './components/favoriteMovie/favMovie';
import MovieLogo from './components/favoriteMovie/images/Logo.png'
import CurrentTime from './components/currentTime/CurrentTime';
import FavPet from './components/favPet/FavPet';
import CatLogo from './components/favPet/images/CatLogo.jpg';
function App() {
  return (
    <>
      {/* <FavBand /> */}
      {/* <Recipe /> */}
      {/* <Shakespeare /> */}
      {/* <FavMovie {...MovieLogo} /> */}
      {/* <CurrentTime /> */}
      <FavPet logo={CatLogo} />
    </>
  );
}

export default App;
