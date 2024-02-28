import { Fragment, useState } from "react";

function Button({children, onclick}) {
  return (
    <button onClick={onclick}>
      {children}
    </button>
  )
}

function App() {
  let [number, isNumber] = useState(0);
  
  return (
  <Fragment>
    <div>{number}</div>
    <Button onclick={() => isNumber(number + 1)}>
      {"Increase"}
    </Button>
    <Button onclick={() => isNumber(number - 1)}>
      {"Decrease"}
    </Button>
  </Fragment>
  );
}

export default App;
