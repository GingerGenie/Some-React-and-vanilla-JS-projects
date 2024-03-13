import { Fragment, useState } from "react";
import './style.css';
import {IDnames as data} from "./Data.js";

function Table({fltr, childrens}) {
  let listOfNames = data
  .filter(person => person.name.startsWith(fltr))
  .map(person => 
    <tr key={person.id}>
      <th>
        {person.name}
      </th>
    </tr>)
  
  return (
    <table>
      {listOfNames}
    </table>
  )
}

function App() {
  let [filter, isTap] = useState('');
  return (
  <Fragment>
    <input onKeyUp={(event) => {isTap(event.target.value)}}></input>
    <Table fltr={filter}>
    </Table>
  </Fragment>
  );
}

export default App;
