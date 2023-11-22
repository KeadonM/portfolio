import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function App() {
  return (
    <>
      <a className="name" href="https://github.com/KeadonM" target="blank">
        Keadon Mitchell <FontAwesomeIcon icon={brands('github')} />
      </a>

      <div className="name">
        Under Construction <FontAwesomeIcon icon={solid('Wrench')} />
      </div>
    </>
  );
}

export default App;
