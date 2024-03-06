import { Fragment, useState } from "react";
import './style.css';

function Button({children, event}) {
  return (
    <button onClick={event}>
      {children}
    </button>
  )
}

function App() {
  let [number, isNumber] = useState(11);
  let [color, isColor] = useState('hot');

  return (
  <Fragment>
    <div className={`thermometer ${color}`}>
        <div className="indicator">{number}</div>
        <div>
            <Button event={() => {
              if (number === 9) isColor('hot');
              isNumber(number + 1);
            }}>{'+'}</Button>
            <Button event={() => {
              if (number === 10) isColor('cold');
              isNumber(number - 1);
            }}>{'-'}</Button>
        </div>
    </div>
  </Fragment>
  );
}

export default App;
