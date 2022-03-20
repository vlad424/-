import Slider from './components/header/slider_data/Slider';
import BurgerMenu from './components/other/BurgerMenu';

import './assets/css/app.css';
import Support from './components/header/su_slider/Support';
import Movies from './components/main/movies/Movies';

function App() {
  return (
    <div className="wrap">
      <div className="content">
        <header className="header">
          <div className="header_upper">
            <Slider/>
            <Support/>
            {/* !!! */}
          </div>
          <div className="header_down">

          </div>
        </header>
        <main className="main">
          <Movies/>
        </main>
        <footer className="footer">

        </footer>
      </div>
      <BurgerMenu/>
    </div>
  );
}

export default App;
