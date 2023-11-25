import './App.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function App() {
  return (
    <>
      <a className="name" href="https://github.com/KeadonM" target="blank">
        Keadon Mitchell <FontAwesomeIcon icon={brands('github')} />
      </a>

      <div className="construction">
        Under Construction <FontAwesomeIcon icon={solid('Wrench')} />
      </div>

      <div className="projects-container links">
        <a href="https://conspicuous.ink" target="blank">
          Conspicuous Ink
        </a>
        <span> | </span>
        <a href="https://resucraft.keadon.dev/" target="blank">
          ResuCraft
        </a>
        <span> | </span>
        <a href="https://keadonm.github.io/11-odin-weather-app/" target="blank">
          Weatherly
        </a>
        <span> | </span>
        <a href="https://keadonm.github.io/12-odin-battleship/" target="blank">
          Battleship
        </a>
      </div>
    </>
  );
}

export default App;
